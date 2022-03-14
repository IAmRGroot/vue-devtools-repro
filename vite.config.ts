import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import scriptSetup from 'unplugin-vue2-script-setup/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue2(),
        scriptSetup(),
        components({
            resolvers: [
                VuetifyResolver(),
            ],
        }),
    ],
    root: '.',
    base: '/',
    resolve: { alias: { '@': resolve(__dirname, './src') } },
    server: { host: '0.0.0.0' },
});
