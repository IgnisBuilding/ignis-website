import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { TeamMembers } from './collections/TeamMembers'
import { TimelineEvents } from './collections/TimelineEvents'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Media } from './collections/Media'
import { Stats } from './collections/Stats'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- IGNIS Admin',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/ignis-logo.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: './components/Logo',
        Icon: './components/Icon',
      },
    },
  },
  collections: [
    Users,
    TeamMembers,
    TimelineEvents,
    ContactSubmissions,
    Media,
    Stats,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true, // Auto-create/update tables in development
  }),
  sharp: require('sharp'),
})
