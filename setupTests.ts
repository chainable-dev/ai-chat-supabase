// setupTests.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/headers
vi.mock('next/headers', () => ({
  cookies: () => ({
    get: vi.fn().mockReturnValue({ value: 'test-model-id' }),
  }),
}));

// Mock generateUUID
vi.mock('./lib/utils', () => ({
  generateUUID: () => 'test-uuid',
}));

// Mock models
vi.mock('./ai/models', () => ({
  DEFAULT_MODEL_NAME: 'default-model',
  models: [{ id: 'some-model-id', name: 'Some Model' }],
}));

// Mock Chat component
vi.mock('./components/custom/chat', () => ({
  Chat: ({ 
    id,
    initialMessages,
    selectedModelId 
  }: {
    id: string;
    initialMessages?: any[];
    selectedModelId: string;
  }) => {
    return React.createElement('div', {}, [
      React.createElement('div', { 'data-testid': 'chat-id', key: 'chat-id' }, id),
      React.createElement('div', { 'data-testid': 'selected-model-id', key: 'selected-model-id' }, selectedModelId)
    ]);
  }
}));