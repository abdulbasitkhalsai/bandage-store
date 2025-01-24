import { defineType } from "sanity";

export const category = defineType( {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
            {
        name: 'categoryName',
        title: 'Category Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'categoryName',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'parentCategoryId',
        title: 'Parent Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
    ],
  });
  