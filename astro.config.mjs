
 // @ts-check
 import { defineConfig } from 'astro/config';
 import starlight from '@astrojs/starlight';
 
 export default defineConfig({
   site: 'https://mamasitas-guides.vercel.app',
   integrations: [
     starlight({
       title: 'MamaSitas',
       defaultLocale: 'root',
       locales: {
         root: { label: 'Русский', lang: 'ru' },
         uk: { label: 'Українська', lang: 'uk' },
       },
       customCss: ['./src/styles/custom.css'],
       components: { Footer: './src/components/CustomFooter.astro' },
       sidebar: [
         {
           label: 'Руководства',
           translations: {
             uk: 'Посібники',
           },
           items: [
             {
               label: 'EX-26 Autónomo',
               link: '/guides/ex-26-autonomo/',
             },
             {
               label: 'EX-26 Cuenta Ajena',
               link: '/guides/ex-26-cuenta-ajena/',
             },
             {
               label: 'EX-25 Menores',
               link: '/guides/ex-25-menores/',
             },
             {
               label: 'Калькулятор пошлин',
               translations: {
                 uk: 'Калькулятор зборів',
               },
               link: '/reference/tasas/',
             },
           ],
         },
         {
           label: 'Платные руководства',
           translations: {
             uk: 'Платні посібники',
           },
           items: [
             {
               label: 'Каталог',
               link: '/paid/',
             },
           ],
         },
       ],
     }),
   ],
 });
 