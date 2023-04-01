import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3001/graphql',
  documents: ['graphql/**/*.ts'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
      config: { maybeValue: 'T' },
    },
  },
};

export default config;
