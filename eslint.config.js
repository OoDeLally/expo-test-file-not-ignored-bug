import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';

export default [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      ts,
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
      react,
    },
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.jsx',
      '**/*.tsx',
    ],
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@stylistic/indent': ['warn', 2],
      '@stylistic/no-multi-spaces': 'warn',
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/semi-spacing': 'warn',
      '@stylistic/key-spacing': 'warn',
      '@stylistic/keyword-spacing': 'warn',
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/type-generic-spacing': 'warn',
      '@stylistic/type-annotation-spacing': ['warn'],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/no-multiple-empty-lines': 'warn',
      '@stylistic/member-delimiter-style': ['warn', {
        multiline: { delimiter: 'semi', requireLast: true },
        multilineDetection: 'brackets',
      }],
      '@stylistic/quotes': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@stylistic/quotes': ['warn', 'single'],
      'react/jsx-tag-spacing': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
    ignores: ['.expo/**'],
  },
];
