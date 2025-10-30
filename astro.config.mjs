// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  integrations: [
    starlight({
      title: 'Daistro',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      favicon: '/favicon.png',
      customCss: ['/globals.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ label: 'Getting Started', slug: 'getting-started' }],
        },
        {
          label: 'Components',
          items: [
            {
              label: 'Actions',
              items: [{ label: 'Button', slug: 'components/actions/button' }],
            },
          ],
        },
      ],
    }),
  ],
});
