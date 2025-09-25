import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://asianhornet.com',
  markdown: {
    rehypePlugins: [
      ["rehype-external-links", { target: "_blank", rel: ["noopener", "noreferrer"] }]
    ]
  }
});
