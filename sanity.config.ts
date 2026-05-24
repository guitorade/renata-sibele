import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { imovel, cidade, bairro, categoria } from './studio/schemas';

export default defineConfig({
  name: 'default',
  title: 'Renata Sibele Admin',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: [imovel, cidade, bairro, categoria],
  },
});
