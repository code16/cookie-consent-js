import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: 'dist',
    },
    plugins: [
        laravel({
            input: [
                'resources/js/index.js',
            ],
            publicDirectory: '/dist',
            refresh: false,
        }),
    ],
})
