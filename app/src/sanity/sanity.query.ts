import { groq } from 'next-sanity';
import sanityClient from './sanity.client';
import { IProductProp } from '@/interfaces';

// Get product data
export async function GetProductData() {
  return sanityClient.fetch(
    groq`
    *[_type == "product" && defined(slug.current)] {
      title,
      price,
      description,
      tags,
      isNew,
      dicountPercentage,
      _id,
      "imageUrl": productImage.asset->url,
      slug { current },
      productId
    }`
  );
}

// Get categories data
export async function GetCategoriesData() {
  return sanityClient.fetch(
    groq`
    *[_type == "category" && defined(slug.current)] | order(productCount desc) 
    [count(*[_type == "product" && references(^._id)]) > 0] {
      _id,
      "imageUrl": image.asset->url,
      categoryName,
      slug { current },
      "productCount": count(*[_type == "product" && references(^._id)])
    }`
  );
}

// Get products for a specific category
export const GetCategoryProductsData = async (categoryId: string) => {
  const query = groq`
    *[_type == "product" && references($categoryId)] {
      _id,
      title,
      price,
      productId,
      slug,
      description,
      "imageUrl": productImage.asset->url
    }
  `;
  
  const products = await sanityClient.fetch(query, {
    categoryId, // Pass category ID as a parameter to the query
  });

  return products;
};

// Get product IDs from the user's wishlist
export const getUserWishlist = async (userId: string): Promise<string[]> => {
  const query = `*[_type == "user" && _id == $userId][0].wishlist`;
  return await sanityClient.fetch(query, { userId }) || [];
};


export const addToUserWishlist = async (userId: string, productId: string) => {
  console.log(`Adding product ${productId} to wishlist for user ${userId}`);

  try {
    const response = await sanityClient
      .patch(userId) // Assuming `userId` is the document _id
      .setIfMissing({ wishlist: [] })
      .insert("after", "wishlist[-1]", [{ _type: "reference", _ref: productId }])
      .commit();

    console.log("Sanity response:", response);
    return response;
  } catch (error) {
    console.error("Sanity update failed:", error);
    throw error;
  }
};


// Remove product ID from the user's wishlist in Sanity
export const removeFromUserWishlist = async (userId: string, productId: string) => {
  return await sanityClient.patch(userId)
    .unset([`wishlist[_ref=="${productId}"]`])
    .commit();
};

// Fetch full product details using product IDs
export const fetchProductsByIds = async (productIds: string[]): Promise<IProductProp[]> => {
  if (productIds.length === 0) return [];

  const query = `*[_type == "product" && _id in $productIds]`;
  return await sanityClient.fetch(query, { productIds });
};
