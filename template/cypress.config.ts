import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://m2.demo.wilma.dev'
  },
  env: {
    waitForPageLoad: 3000
  },
  viewportWidth: 1200
});
