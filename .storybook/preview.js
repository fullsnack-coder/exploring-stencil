import { defineCustomElements } from '../dist/loader';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

defineCustomElements();
