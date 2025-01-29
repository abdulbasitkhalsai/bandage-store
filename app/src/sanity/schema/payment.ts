import { defineType, defineField } from 'sanity';

export const paymentSchema = defineType({
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    defineField({
      name: 'paymentId',
      title: 'Payment ID',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().error('Payment ID is required.'),
    }),
    defineField({
      name: 'method',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Credit Card', value: 'credit_card' },
          { title: 'PayPal', value: 'paypal' },
          { title: 'Bank Transfer', value: 'bank_transfer' },
          { title: 'Cash', value: 'cash' },
        ],
        layout: 'dropdown', // Dropdown for cleaner UI
      },
      validation: (Rule) =>
        Rule.required().error('Payment method must be selected.'),
    }),
    defineField({
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(50)
          .error('Transaction ID must be between 10 and 50 characters.'),
    }),
    defineField({
      name: 'status',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Failed', value: 'failed' },
          { title: 'Refunded', value: 'refunded' },
        ],
        layout: 'radio', // Radio buttons for status selection
      },
      validation: (Rule) =>
        Rule.required().error('Payment status must be selected.'),
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Amount must be a positive number.'),
    }),
    defineField({
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Automatically set to the current date
      validation: (Rule) =>
        Rule.required().error('Payment date is required.'),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'reference',
      to: [{ type: 'order' }],
      validation: (Rule) => Rule.required().error('Order reference is required.'),
    }),
    defineField({
      name: 'stripeResponse',
      title: 'Stripe Response (Raw Data)',
      type: 'object',
      fields: [
        { name: 'id', title: 'Stripe Payment ID', type: 'string' },
        { name: 'status', title: 'Stripe Status', type: 'string' },
        { name: 'receipt_url', title: 'Receipt URL', type: 'url' },
      ],
      hidden: true, // Hide this in the Studio; it's primarily for backend use
    }),
  ],
  preview: {
    select: {
      title: 'paymentId',
      subtitle: 'method',
      amount: 'amount',
      status: 'status',
    },
    prepare(selection) {
      const { title, subtitle, amount, status } = selection;
      return {
        title: `Payment #${title}`,
        subtitle: `${subtitle} - ${status} - $${amount}`,
      };
    },
  },
});
