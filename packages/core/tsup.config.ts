/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, Options } from 'tsup';

export default defineConfig(
  ({ watch }) => <Options[]>[
      {
        entry: ['src/index.ts'],
        outDir: 'dist',
        format: ['cjs', 'iife', 'esm'],
        globalName: 'SlateYjsCore',
        platform: 'browser',
        splitting: false,
        bundle: true,
        sourcemap: true,
        minify: false,
        clean: !watch,
        external: ['slate-latest', 'slate-react-latest'],
      },
      !!watch && {
        entry: ['src'],
        outDir: 'dist',
        format: [],
        platform: 'browser',
        splitting: false,
        bundle: false,
        sourcemap: true,
        dts: true,
        minify: false,
        clean: false,
        external: ['slate-latest', 'slate-react-latest'],
      },
    ].filter(Boolean)
);
