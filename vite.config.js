import { existsSync } from 'node:fs';
import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Copies .robots.<mode>.txt to robots.txt in each build's output folder.
function robots() {
	let config;
	return {
		name: 'robots',
		apply: 'build',
		enforce: 'post',
		configResolved(resolvedConfig) {
			config = resolvedConfig;
		},
		async closeBundle() {
			const outDir = resolve(config.root, config.build.outDir);
			// A failed build writes no output folder. Copying would throw and hide its error.
			if (!existsSync(outDir)) {
				return;
			}
			await copyFile(
				resolve(config.root, `.robots.${config.mode}.txt`),
				resolve(outDir, 'robots.txt')
			);
		}
	};
}

export default defineConfig({
	plugins: [sveltekit(), robots()],
	server: {
		fs: {
			allow: ['..']
		}
	}
});
