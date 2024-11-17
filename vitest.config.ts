// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Use global test functions like describe, it, expect
    environment: 'jsdom', // Use jsdom for testing React components
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'], // Include test files
    setupFiles: './setupTests.ts', // Optional: path to setup file if needed
  },
});