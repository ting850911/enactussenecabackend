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
        name: 'projectImg',
        title: 'Picture',
        type: 'image',
        options: {
          accept: 'image/jpeg, image/jpg, image/png',
          hotspot: true,
          sources: [unsplashAssetSource]
        },
      }),
      defineField({
        name: 'desc',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
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
