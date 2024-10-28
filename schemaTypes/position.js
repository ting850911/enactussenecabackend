import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'position',
  title: 'Position',
  type: 'document',
  fields: [
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{ type: 'department' }],
      validation: (Rule) => Rule.required(),
    }),
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
      title: 'department.title',
      subtitle: 'title',
    },
  },
})