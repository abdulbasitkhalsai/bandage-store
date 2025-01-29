import { defineType, defineField } from 'sanity';

export const variantSchema = defineType({
  name: 'variant',
  title: 'Variant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Variant Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Variant name is required.'),
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule) => Rule.required().error('Product reference is required.'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('Price must be a positive number.'),
    }),
    defineField({
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(0).error('Stock quantity must be at least 0.'),
    }),
    defineField({
      name: 'attributes',
      title: 'Attributes',
      type: 'object',
      fields: [
        defineField({
          name: 'color',
          title: 'Color',
          type: 'string',
        }),
        defineField({
          name: 'size',
          title: 'Size',
          type: 'string',
        }),
        // You can add more fields for other product variants like material, style, etc.
      ],
    }),
  ],
});
