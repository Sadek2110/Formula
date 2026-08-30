import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://formula.dksaa.com',
  output: 'static',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
