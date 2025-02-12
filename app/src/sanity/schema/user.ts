
import { defineType, defineField } from "sanity";

export const userSchema = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "userId",
      title: "User ID",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required().error("User ID is required."),
      description: "System-generated unique user ID (e.g., USER0001, USER0002).",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(2).max(50).error("Name must be between 2 and 50 characters."),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.required().email().error("A valid email address is required."),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) =>
        Rule.min(10)
          .max(15)
          .regex(/^\+?[0-9]*$/, { name: "Phone Number" })
          .error("A valid phone number is required (10-15 digits)."),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      validation: (Rule) =>
        Rule.min(10).max(200).error("Address must be between 10 and 200 characters."),
    }),
    defineField({
      name: "wishlist",
      type: "array",
      title: "Wishlist",
      of: [{ type: "reference", to: [{ type: "product" }] }], // Correctly referencing products
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Admin", value: "admin" },
          { title: "Manager", value: "manager" },
          { title: "User", value: "user" },
        ],
        layout: "radio",
      },
      initialValue: "user",
      readOnly: true, // Prevent manual role changes in Sanity Studio
      validation: (Rule) => Rule.required().error("Role must be assigned to the user."),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error("Created At timestamp is required."),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error("Updated At timestamp is required."),
    }),

    // OAuth Fields (Read-Only)
    defineField({ name: "provider", title: "Provider", type: "string", readOnly: true }),
    defineField({ name: "providerId", title: "Provider ID", type: "string", readOnly: true }),
    defineField({
      name: "emailVerified",
      title: "Email Verified",
      type: "boolean",
      initialValue: false,
      readOnly: true,
    }),
    defineField({ name: "givenName", title: "Given Name", type: "string", readOnly: true }),
    defineField({ name: "familyName", title: "Family Name", type: "string", readOnly: true }),
    defineField({ name: "picture", title: "Profile Picture", type: "url", readOnly: true }),

    // Hidden OAuth Tokens
    defineField({ name: "accessToken", title: "Access Token", type: "string", hidden: true }),
    defineField({ name: "refreshToken", title: "Refresh Token", type: "string", hidden: true }),
    defineField({ name: "tokenExpiry", title: "Token Expiry", type: "datetime", hidden: true }),
  ],
  preview: {
    select: { title: "name", subtitle: "email" },
  },
});
