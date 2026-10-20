// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mamasitas-guides.vercel.app',
  integrations: [
    starlight({
      title: 'MamaSitas',
      customCss: ['./src/styles/custom.css'],
      // Переносим документацию в префикс /docs/, чтобы корень / остался полностью свободным для нашего Astro-файла
      slug: 'docs',
      sidebar: [
        {
          label: 'Руководства',
          items: [
            { label: 'EX-26 Autónomo', link: '/docs/guides/ex-26-autonomo/' },
            { label: 'EX-26 Cuenta Ajena', link: '/docs/guides/ex-26-cuenta-ajena/' },
            { label: 'EX-25 Menores', link: '/docs/guides/ex-25-menores/' },
            { label: 'Калькулятор пошлин', link: '/docs/reference/tasas/' },
          ],
        },
      ],
    }),
  ],
});
