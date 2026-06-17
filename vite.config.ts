import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PersianUI',
      fileName: (format) => `persian-ui.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js'],
      output: {
        globals: {
          lit: 'Lit',
          'lit/decorators.js': 'LitDecorators',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});