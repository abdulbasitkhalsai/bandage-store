import { defineType } from "sanity";

export const cartSchema = defineType({
  name: "cart",
  title: "Cart",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Unique identifier for the user who owns this cart.",
    },
    {
      name: "items",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (rule) => rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (rule) => rule.required().min(1),
            },
          ],
        },
      ],
    },
    {
      name: "updatedAt",
      title: "Last Updated At",
      type: "datetime",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm:ss" },
    },
  ],
});
