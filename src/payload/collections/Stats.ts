import type { CollectionConfig } from 'payload'

export const Stats: CollectionConfig = {
  slug: 'stats',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'value', 'order'],
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., 99.2%, <3s, 142',
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., Detection Accuracy, Response Time',
      },
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      admin: {
        description: 'Material icon name (e.g., verified, timer, sensors)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
  ],
}
