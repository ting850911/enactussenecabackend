import {defineField, defineType} from 'sanity'
import { unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash'

export default defineType(
  {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: {
          accept: 'image/jpeg, image/jpg, image/png',
          hotspot: true,
          sources: [unsplashAssetSource]
        },
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
    ],
    preview: {
      select: {
        title: 'name',
      },
    },
  },
)
