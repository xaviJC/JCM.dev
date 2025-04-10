import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xavijc.github.io',
  base: '/JCM.dev',
  integrations: [tailwind()],
}); 