import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MamaSitas — База знаний',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
        uk: {
          label: 'Українська',
          lang: 'uk',
        },
      },
      social: {
        telegram: 'https://t.me/mamasitas_es',
      },
      sidebar: [
        {
          label: 'Главное',
          items: [{ label: 'Старт / База знаний', link: '/' }],
        },
        {
          label: 'Временная защита (Переход)',
          items: [
            { label: 'EX-26 Autónomo', link: '/guides/ex26-autonomo/' },
            { label: 'EX-26 Cuenta Ajena', link: '/guides/ex26-cuenta-ajena/' },
          ],
        },
        {
          label: 'Детям',
          items: [{ label: 'EX-25 Menores', link: '/guides/ex25-menores/' }],
        },
        {
          label: 'Справочник',
          items: [{ label: 'Оплата пошлин (Tasas)', link: '/reference/tasas/' }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});