import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title of skill',
      type: 'string',
    },
    {
      name: 'yearsOfExperience',
      title: 'YearsOfExperience',
      type: 'number',
      description: "The number of years of experience you've had with this skill",
      validation: (Rule) => Rule.min(0).max(20),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
