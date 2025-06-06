import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rotorem.bg',
  integrations: [
    tailwind({
      // Using a simple config without requiring daisyui directly 
      // (it will be loaded via the tailwind.config.cjs file)
    }),
    sitemap({
      i18n: {
        defaultLocale: 'bg',
        locales: {
          bg: '', // No prefix for Bulgarian (empty string)
          en: 'en', // /en/ prefix for English
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});