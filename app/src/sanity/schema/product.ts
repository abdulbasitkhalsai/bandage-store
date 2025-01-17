// export const ProductSchema = {
//     name: "product",
//     title: "Product",
//     type: "document",
//     fields: [
//         {
//             name: "name",
//             title: "Product Name",
//             type: "string",
//         },
//         {
//             name: "description",
//             title: "Description",
//             type: "text",
//         },
//         {
//             name: "price",
//             title: "Price",
//             type: "number",
//         },
//         {
//             name: "stockLevel",
//             title: "Stock Level",
//             type: "number",
//         },
//         {
//             name: "image",
//             title: "Image",
//             type: "array",
//             of: [{type: "image"}]
//         },
//         {
//             name: "slug",
//             title: "Product Slug",
//             type: "slug",
//             options: {
//                 source: "name",
//                 maxLength: 96
//             }
//         }
//     ]
// {
//     "id": 1,
//     "name": "Product 1",
//     "price": 335.14,
//     "image": "https://picsum.photos/seed/449/150",
//     "description": "This is a description for Product 1. It is a high-quality item."
//   },
// }

// import { Rule } from '@sanity/types';

// export const ProductSchema = {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'ID',
//       type: 'number',
//       description: 'Product ID',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       description: 'Name of the product',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       description: 'Price of the product',
//       validation: (Rule: Rule) => Rule.required().positive().precision(2),
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       description: 'Image of the product',
//       options: {
//         hotspot: true, 
//       }
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       description: 'Description of the product',
//       validation: (Rule: Rule) => Rule.required(),
//     },
//   ],
// };

import { defineType, Rule } from '@sanity/types';

export const ProductSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Product ID',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the product',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product',
      validation: (Rule: Rule) => Rule.required().positive().precision(2),
    },
    {
      name: 'priceWithoutDiscount',
      title: 'Price Without Discount',
      type: 'number',
      description: 'Original price of the product before any discount',
      validation: (Rule: Rule) => Rule.required().positive().precision(2),
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      description: 'Discount percentage applied to the product',
      validation: (Rule: Rule) => Rule.optional().min(0).max(100),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Product rating',
      validation: (Rule: Rule) => Rule.optional().min(0).max(5),
    },
    {
      name: 'ratingCount',
      title: 'Rating Count',
      type: 'number',
      description: 'Number of ratings the product has received',
      validation: (Rule: Rule) => Rule.optional().positive(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags related to the product, e.g., hoodie, casual, unisex',
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available sizes for the product',
    },
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'string',
    //   description: 'URL of the product image',
    //   validation: (Rule: Rule) => Rule.required().uri({
    //     allowRelative: false,
    //     scheme: ['http', 'https'],
    //   }),
    // },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    // {
    //     name: 'imageUrl',
    //     title: 'Image URL',
    //     type: 'url',
    //     description: 'Enter the URL for the image (e.g., https://picsum.photos/seed/449/150)',
    //     // validation: (Rule:Rule) => Rule.uri({
    //     //   scheme: ['http', 'https'],
    //     //   allowRelative: false,
    //     //   message: 'Please enter a valid URL starting with http:// or https://',
    //     // }),
    //   },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the product',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
});
