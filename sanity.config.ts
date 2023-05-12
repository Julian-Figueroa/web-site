import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: '13a48i1d',
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
