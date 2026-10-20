// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MamaSitas',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Руководства',
          items: [
            { label: 'EX-26 Autónomo', link: '/guides/ex-26-autonomo/' },
            { label: 'EX-26 Cuenta Ajena', link: '/guides/ex-26-cuenta-ajena/' },
            { label: 'EX-25 Menores', link: '/guides/ex-25-menores/' },
            { label: 'Калькулятор пошлин', link: '/reference/tasas/' },
          ],
        },
      ],
    }),
  ],
});
