import {defineField, defineType} from 'sanity'
import {unsplashAssetSource} from 'sanity-plugin-asset-source-unsplash'

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personImg',
      title: 'Personal Image',
      type: 'image',
      description: 'The image size prefer 300x300px (square)',
      options: {
        accept: 'image/jpeg, image/jpg, image/png',
        hotspot: true,
        sources: [unsplashAssetSource],
      },
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{type: 'department'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'reference',
      to: [{type: 'position'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'onBoardDate',
      title: 'On Board Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personalURL',
      type: 'object',
      fieldsets: [{name: 'social'}],
      fields: [
        {
          title: 'Linkedin',
          name: 'linkedin',
          type: 'url',
          fieldset: 'social',
          validation: (Rule) => Rule.uri({scheme: ['https']}),
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
          fieldset: 'social',
          validation: (Rule) => Rule.uri({scheme: ['https']}),
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'url',
          fieldset: 'social',
          validation: (Rule) => Rule.uri({scheme: ['https']}),
        },
        {
          title: 'X (Twitter)',
          name: 'x',
          type: 'url',
          fieldset: 'social',
          validation: (Rule) => Rule.uri({scheme: ['https']}), // only allow https
        },
        {
          title: 'Email',
          name: 'email',
          type: 'text',
          fieldset: 'social',
          validation: (Rule) => Rule.email(),
        },
      ],
    }),
    defineField({
      name: 'priority',
      title: 'Group Priority',
      type: 'number',
      description:
        'The order of the member in meet our team page: 1 is the highest priority (Leadership group) and so on',
      validation: (Rule) => Rule.integer().min(1).max(100).positive(),
    }),
  ],
  preview: {
    select: {
      title: 'lastName',
      subtitle: 'firstName',
      media: 'personImg',
    },
  },
})
