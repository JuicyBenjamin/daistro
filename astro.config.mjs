// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Daistro',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Components',
					items: [
						{ label: 'Actions', items: [
							{ label: 'Button', slug: 'components/actions/button' },
						]}
					]
				}
			],
		}),
	],
});
