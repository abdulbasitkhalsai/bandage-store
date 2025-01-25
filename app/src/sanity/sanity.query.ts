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

  