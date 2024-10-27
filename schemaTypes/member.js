import {defineField, defineType} from 'sanity'
import createClient from '@sanity/client'
const client = createClient({
  projectId: 'td08n1oq',
  dataset: 'production',
  useCdn: true,
  // Do not be tempted to use a dynamic value for the apiVersion.
  // The reason for setting a static value is to prevent unexpected, breaking changes.
  apiVersion: '2024-10-27',
})

function mapToOption(arr) {
  return arr.map((item) => ({
    title: item.title,
    value: item.title,
  }))
}

async function getDataSet(type) {
  const query = `*[_type == "${type}"]`
  const data = await client.fetch(query)
  return mapToOption(data)
}

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
        accept: 'image/jpeg',
        hotspot: true,
      },
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      of: [{type: 'reference', to: {type: 'department'}}],
      options: {
        list: (await getDataSet('department')) || [],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      of: [{type: 'reference', to: {type: 'position'}}],
      options: {
        list: (await getDataSet('position')) || [],
        layout: 'dropdown',
      },
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
