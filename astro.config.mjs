import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MamaSitas',
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
      social: [
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/mamasitas_es' },
      ],
      sidebar: [
        {
          label: 'Главное / Головне',
          items: [
            { label: 'Старт / База знаний', link: '/' },
          ],
        },
        {
          label: 'Временная защита (Переход)',
          translations: { uk: 'Тимчасовий захист (Перехід)' },
          items: [
            { label: 'EX-26 Autónomo', link: '/guides/ex26-autonomo/' },
            { label: 'EX-26 Cuenta Ajena', link: '/guides/ex26-cuenta-ajena/' },
          ],
        },
        {
          label: 'Детям',
          translations: { uk: 'Дітям' },
          items: [
            { label: 'EX-25 Menores', link: '/guides/ex25-menores/' },
          ],
        },
        {
          label: 'Справочник',
          translations: { uk: 'Довідник' },
          items: [
            { 
              label: 'Оплата пошлин (Tasas)', 
              translations: { uk: 'Оплата мита (Tasas)' },
              link: '/reference/tasas/' 
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
