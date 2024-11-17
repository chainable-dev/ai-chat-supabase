// __tests__/structure.test.ts
import { describe, it, expect } from 'vitest';
import { existsSync } from 'fs';
import { join } from 'path';

describe('Project Structure', () => {
  const basePath = process.cwd();

  const expectedFiles = [
    'tsconfig.json',
    'package.json',
    'vitest.config.ts',
    'setupTests.ts',
    'app/(chat)/page.tsx',
    'db/mutations.ts',
    'lib/utils.ts',
    '__tests__/tsconfig.test.ts',
  ];

  expectedFiles.forEach((file) => {
    it(`should have ${file}`, () => {
      const filePath = join(basePath, file);
      expect(existsSync(filePath)).toBe(true);
    });
  });

  const expectedDirectories = [
    'app/(chat)',
    'components/custom',
    'db',
    'lib',
    '__tests__',
  ];

  expectedDirectories.forEach((dir) => {
    it(`should have ${dir} directory`, () => {
      const dirPath = join(basePath, dir);
      expect(existsSync(dirPath)).toBe(true);
    });
  });
});