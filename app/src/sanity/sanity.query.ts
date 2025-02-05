import { groq } from "next-sanity";
import sanityClient from "./sanity.client";



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
            slug {
                current
            },
            productId
        }`
    );
}

export async function GetCategoriesData() {
    return sanityClient.fetch(
        groq`*[_type == "category" && defined(slug.current)] | order(productCount desc) 
        [count(*[_type == "product" && references(^._id)]) > 0] {

            _id,
            "imageUrl": image.asset->url,
            categoryName,
            slug { current },
            "productCount": count(*[_type == "product" && references(^._id)])
        }`
    );
};


export const GetCategoryProductsData = async (categoryId: string) => {
    const query = groq`
      *[_type == "product" && references($categoryId)] {
        _id,
        title,
        price,
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

// Fetch user's wishlist from Sanity
export const getUserWishlist = async (email: string) => {
  const data = await sanityClient.fetch(
    groq`*[_type == "user" && email == $email]{wishlist[]->{productId, title, price, imageUrl}}`,
    { email }
  );
  return data?.[0]?.wishlist || [];
};

// Add product to user's wishlist
export const addToUserWishlist = async (email: string, productId: string) => {
  const user = await sanityClient.fetch(
    groq`*[_type == "user" && email == $email][0]`,
    { email }
  );

  if (user) {
    await sanityClient
      .patch(user._id)
      .setIfMissing({ wishlist: [] })
      .insert('after', 'wishlist[-1]', [{ _ref: productId, _type: 'reference' }])
      .commit();
  }
};

// Remove product from user's wishlist
export const removeFromUserWishlist = async (email: string, productId: string) => {
  const user = await sanityClient.fetch(
    groq`*[_type == "user" && email == $email][0]`,
    { email }
  );

  if (user) {
    await sanityClient
      .patch(user._id)
      .unset([`wishlist[_ref=="${productId}"]`])
      .commit();
  }
};
