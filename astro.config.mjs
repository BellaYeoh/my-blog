import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://bellayeoh.github.io',
  base: '/my-blog',
  integrations: [preact()]
});