import { defineType, defineField } from 'sanity';

export const orderSchema = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().error('Order ID is required.'),
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule) => Rule.required().error('User reference is required.'),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Total price must be a positive number.'),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Refunded', value: 'refunded' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule) =>
        Rule.required().error('Order status must be specified.'),
    }),
    defineField({
      name: 'generatedAt',
      title: 'Generated Date & Time',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) =>
        Rule.required().error('Generated date & time is required.'),
    }),
    defineField({
      name: 'payment',
      title: 'Payment',
      type: 'reference',
      to: [{ type: 'payment' }],
      validation: (Rule) =>
        Rule.required().error('Payment reference is required.'),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineField({
          name: 'productDetails',
          type: 'object',
          title: 'Product Details',
          fields: [
            defineField({
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
              validation: (Rule) =>
                Rule.required().error('Product reference is required.'),
            }),
            defineField({
              name: 'variant',
              title: 'Variant',
              type: 'reference',
              to: [{ type: 'variant' }],
              validation: (Rule) =>
                Rule.required().error('Variant reference is required.'),
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .error('Quantity must be at least 1.'),
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.min(1).error('At least one product must be added to the order.'),
    }),
  ],
  preview: {
    select: {
      title: 'orderId',
      subtitle: 'status',
      user: 'user.name',
      totalPrice: 'totalPrice',
    },
    prepare(selection) {
      const { title, subtitle, user, totalPrice } = selection;
      return {
        title: `Order #${title}`,
        subtitle: `${subtitle} - User: ${user || 'N/A'} - Total: $${totalPrice}`,
      };
    },
  },
});
