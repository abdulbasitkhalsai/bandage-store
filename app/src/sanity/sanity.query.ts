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
