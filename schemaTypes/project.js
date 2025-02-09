import {defineField, defineType} from 'sanity'
import {unsplashAssetSource} from 'sanity-plugin-asset-source-unsplash'

export default defineType({
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
        sources: [unsplashAssetSource],
      },
    }),
    defineField({
      name: 'overview',
      title: 'Project Overview',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
      
      description: 'The project overview, no more than 200 words',
      validation: (Rule) =>
        Rule.custom((blocks) => {
          const totalWords = blocks.reduce((acc, block) => {
            const text = block.children?.map((child) => child.text).join(' ') || ''
            return acc + text.split(/\s+/).filter((word) => word.length > 0).length
          }, 0)
          return totalWords <= 200 ? true : 'Content must be 200 words or less.'
        }),
    }),
    defineField({
      name: 'detail',
      title: 'Project Detail',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
      description: 'The project detail',
    }),
  ],
  preview: {
    select: {
      media: 'projectImg',
      title: 'projectName',
    },
  },
})
