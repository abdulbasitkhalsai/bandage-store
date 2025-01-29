import { defineType, defineField } from 'sanity';

export const userSchema = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().error('User ID is required.'),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .error('Name must be between 2 and 50 characters.'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .email()
          .error('A valid email address is required.'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(15)
          .regex(/^\+?[0-9]*$/, { name: 'Phone Number' })
          .error('A valid phone number is required (10-15 digits).'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(200)
          .error('Address must be between 10 and 200 characters.'),
    }),
    defineField({
      name: 'password',
      title: 'Password (Hashed)',
      type: 'string',
      hidden: true, // Hidden to avoid exposing sensitive data in the Studio
      validation: (Rule) =>
        Rule.required().error('Password must be set for every user.'),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Admin', value: 'admin' },
          { title: 'Manager', value: 'manager' },
          { title: 'User', value: 'user' },
        ],
        layout: 'radio',
      },
      initialValue: 'user', // Auto-assign the default role as 'user'
      readOnly: true, // Prevent manual updates from Sanity Studio unless programmatically modified
      validation: (Rule) =>
        Rule.required().error('Role must be assigned to the user.'),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) =>
        Rule.required().error('Created At timestamp is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
});
