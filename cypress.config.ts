import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoshops.splendid-internet.de/magento/demoshop-magento2-daily'
  },
  viewportWidth: 1200
});
