import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://asianhornet.com',
  integrations: [
    mdx(),
    sitemap()   // ✅ added sitemap integration
  ],
  markdown: {
    rehypePlugins: [
      ["rehype-external-links", { target: "_blank", rel: ["noopener", "noreferrer"] }]
    ]
  }
});

