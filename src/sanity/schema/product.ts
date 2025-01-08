export const ProductSchema = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "stockLevel",
            title: "Stock Level",
            type: "number",
        },
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{type: "image"}]
        },
        {
            name: "slug",
            title: "Product Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
        }
    ]
}