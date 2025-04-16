import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'react-bootstrap': 'react-bootstrap/dist/react-bootstrap.esm.js',
    },
  },
});
