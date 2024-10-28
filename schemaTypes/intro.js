import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'orgIntro',
  title: 'Organization Intro',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Organization Logo',
      type: 'image',
      options: {
        accept: 'image/png',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Organization Video Link',
      type: 'url',
    }),
    defineField({
      name: 'desc',
      title: 'Organization Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
