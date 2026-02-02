import type { CollectionConfig } from 'payload'

export const TimelineEvents: CollectionConfig = {
  slug: 'timeline-events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['phase', 'title', 'status', 'date'],
  },
  fields: [
    {
      name: 'phase',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., Phase 1, Phase 2',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., Sep - Oct 2024',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: 'Completed', value: 'completed' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Upcoming', value: 'upcoming' },
      ],
      defaultValue: 'upcoming',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Order in which events appear (lower = first)',
      },
    },
  ],
}
