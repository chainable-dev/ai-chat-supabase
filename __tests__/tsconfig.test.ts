// __tests__/tsconfig.test.ts
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('tsconfig.json configuration', () => {
  const tsconfig = JSON.parse(
    readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8')
  );

  it('should have correct compiler options', () => {
    const { compilerOptions } = tsconfig;
    
    expect(compilerOptions.target).toBe('ESNext');
    expect(compilerOptions.moduleResolution).toBe('bundler');
    expect(compilerOptions.jsx).toBe('preserve');
    expect(compilerOptions.strict).toBe(true);
  });

  it('should have correct module settings', () => {
    const { compilerOptions } = tsconfig;
    
    expect(compilerOptions.module).toBe('esnext');
    expect(compilerOptions.esModuleInterop).toBe(true);
    expect(compilerOptions.resolveJsonModule).toBe(true);
    expect(compilerOptions.isolatedModules).toBe(true);
  });

  it('should have correct path aliases', () => {
    const { compilerOptions } = tsconfig;
    
    expect(compilerOptions.paths).toBeDefined();
    expect(compilerOptions.paths['@/*']).toEqual(['./*']);
  });

  it('should include necessary files', () => {
    expect(tsconfig.include).toContain('**/*.ts');
    expect(tsconfig.include).toContain('**/*.tsx');
    expect(tsconfig.include).toContain('next-env.d.ts');
  });

  it('should exclude node_modules', () => {
    expect(tsconfig.exclude).toContain('node_modules');
  });

  it('should have Next.js plugin configured', () => {
    const { compilerOptions } = tsconfig;
    
    expect(compilerOptions.plugins).toEqual([
      {
        name: 'next'
      }
    ]);
  });
});