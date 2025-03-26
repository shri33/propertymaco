import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  next.configs.recommended,
  tailwind.configs.recommended,
  {
    rules: {
      'react/jsx-key': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
    },
  },
  ...compat.extends('plugin:prettier/recommended'),
];
