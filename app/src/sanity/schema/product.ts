import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: 'productId',
            title: 'Product ID',
            type: 'string',
            validation: Rule => Rule.required(),
        },    
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
        }
        },
        {
            name: 'category',
            title: 'Category',
            type:'reference',
            to: [
                { type: 'category' },
            ],
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        },
        {
            name: "variants",
            title: "Variants",
            type: "array",
            of: [
              {
                type: "reference",
                to: [{ type: "variant" }],
              },
            ],
            description: "Variants for this product (e.g., colors, sizes, etc.)",
          }

    ]
})