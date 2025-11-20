// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://ivanZarza.github.io/portfolio/',
  base: '/portfolio/',
});