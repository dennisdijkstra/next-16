import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  ...nextVitals,
  tseslint.configs.recommended,
  // Override default ignores of eslint-config-next.
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@/quotes': ['error', 'single', {
        allowTemplateLiterals: true,
      }],
      indent: ['error', 2],
      semi: ['error', 'never'],
      'arrow-parens': [1, 'always'],
      'no-multiple-empty-lines': ['error', {
        max: 1,
      }],
      'no-trailing-spaces': 'error',
    }
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig