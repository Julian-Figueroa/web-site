import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

const config = defineConfig({
  projectId,
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2023-05-10',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
