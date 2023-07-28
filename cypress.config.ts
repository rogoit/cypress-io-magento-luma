import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://m2.demo.webvisum.de'
  },
  viewportWidth: 1200
});
