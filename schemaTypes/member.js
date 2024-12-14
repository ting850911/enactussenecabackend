import {defineField, defineType} from 'sanity'
import { unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash'

export default defineType({
  name: 'person',
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
      options: {
        accept: 'image/jpeg, image/jpg, image/png',
        hotspot: true,
        sources: [unsplashAssetSource]
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
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
          fieldset: 'social',
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'url',
          fieldset: 'social',
        },
        {
          title: 'X (Twitter)',
          name: 'x',
          type: 'url',
          fieldset: 'social',
        },
        {
          title: 'Email',
          name: 'email',
          type: 'string',
          fieldset: 'social',
        },
      ],
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
