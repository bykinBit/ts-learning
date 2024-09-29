import ts from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { fileURLToPath } from 'url';
import {resolve,dirname} from 'path';
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename);
export default {
    input: resolve(__dirname,'src/index.ts'),
    output: [
        {
            file: 'dist/bundle.js',
            format: 'iife',
            sourcemap: true
        },
    ],
    plugins: [
        ts({
            tsconfig: resolve(__dirname, './tsconfig.json')
        }),
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        serve({
            openPage: '/public/index.html',
            contentBase: [resolve(__dirname, 'public'), resolve(__dirname, 'dist')],
            port: 8081
        }),
    ],
};
