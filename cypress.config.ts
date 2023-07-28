import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://m2.demo.webvisum.de'
  },
  env: {
    waitForPageLoad: 3000
  },
  viewportWidth: 1200
});
