import {defineField, defineType} from 'sanity'
import { unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash'

export default defineType(
  {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      defineField({
        name: 'projectName',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'link',
        title: 'Project Link',
        type: 'url',
      }),
      defineField({
        name: 'projectImg',
        title: 'Picture',
        type: 'image',
        description: 'The image max height 600px',
        options: {
          accept: 'image/jpeg, image/jpg, image/png',
          hotspot: true,
          sources: [unsplashAssetSource]
        },
      }),
      defineField({
        name: 'overview',
        title: 'Project Overview',
        type: 'text',
        description: 'The project overview, no more than 200 words',
        validation: (Rule) => Rule.max(200),
      }),
      defineField({
        name: 'detail',
        title: 'Project Detail',
        type: 'text',
        description: 'The project detail, no more than 500 words',
        validation: (Rule) => Rule.required().max(500),
      }),
    ],
    preview: {
      select: {
        media: 'projectImg',
        title: 'projectName',
      },
    },
  },
)
