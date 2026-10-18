// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MamaSitas — Гайды по резиденциям в Испании',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/mamasitas_es' },
			],
			sidebar: [
				{
					label: 'Главное',
					items: [{ slug: 'index' }],
				},
				{
					label: 'Временная защита (Переход)',
					items: [
						{ slug: 'guides/ex-26-autonomo' },
						{ slug: 'guides/ex-26-cuenta-ajena' },
					],
				},
				{
					label: 'Детям',
					items: [{ slug: 'guides/ex-25-menores' }],
				},
				{
					label: 'Справочник',
					items: [{ slug: 'reference/tasas' }],
				},
			],
		}),
	],
});
