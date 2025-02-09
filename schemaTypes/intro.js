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
      description: 'The image type prefer PNG',
      options: {
        accept: 'image/png',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'groupImg',
      title: 'Organization Group Image',
      type: 'image',
    }),
    defineField({
      name: 'video',
      title: 'Organization Video Link',
      type: 'url',
      description: 'The video link from Youtube if uploaded both video and image, the video will be displayed first',
    }),
    
    defineField({
      name: 'initiativePrj',
      title: 'initiative Project',
      to: [{type: 'project'}],
      type: 'reference',
      description: 'The project that the organization is working on',
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
