import { defineType, defineField } from 'sanity';

export const inventorySchema = defineType({
  name: 'inventory',
  title: 'Inventory',
  type: 'document',
  fields: [
    defineField({
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().error('Transaction ID is required.'),
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule) => Rule.required().error('Product reference is required.'),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'reference',
      to: [{ type: 'variant' }],
      validation: (Rule) => Rule.required().error('Variant reference is required.'),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).error('Quantity must be at least 1.'),
    }),
    defineField({
      name: 'transactionType',
      title: 'Transaction Type',
      type: 'string',
      options: {
        list: [
          { title: 'StockIn', value: 'StockIn' },
          { title: 'StockOut', value: 'StockOut' },
          { title: 'Return', value: 'Return' },
        ],
      },
      initialValue: 'StockIn',
      validation: (Rule) => Rule.required().error('Transaction type is required.'),
    }),
    defineField({
      name: 'user',
      title: 'User (if applicable)',
      type: 'reference',
      to: [{ type: 'user' }],
      // Removed the optional validation rule; it's optional by default
    }),
    defineField({
      name: 'timestamp',
      title: 'Transaction Timestamp',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error('Transaction timestamp is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'transactionId',
      subtitle: 'transactionType',
      product: 'product.title',
      variant: 'variant.title',
      quantity: 'quantity',
    },
    prepare(selection) {
      const { title, subtitle, product, variant, quantity } = selection;
      return {
        title: `Transaction: ${title}`,
        subtitle: `${subtitle} - Product: ${product || 'N/A'} - Variant: ${variant || 'N/A'} - Quantity: ${quantity}`,
      };
    },
  },
});
