import {defineField, defineType} from 'sanity'

export default defineType(
  {
    name: 'department',
    title: 'Department',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  },
)
