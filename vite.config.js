import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { robots } from 'vite-plugin-robots'

export default defineConfig({
	plugins: [
		sveltekit(),
		robots(),
	],
	server: {
		fs: {
			allow: ['..']
		}
	}
});
