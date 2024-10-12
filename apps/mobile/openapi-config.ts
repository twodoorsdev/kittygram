import type { ConfigFile } from '@rtk-query/codegen-openapi';

const EXCLUDED_OPERATIONS = [
  'getImagesBkIEhN3PG',
  'getImagesByImageIdBreeds',
  'postImagesByImageIdBreeds',
  'deleteImagesByImageIdBreedsAndBreedId',
];
const EXCLUDED_TAGS = ['Breeds', 'Facts', 'Webhooks'];

const config: ConfigFile = {
  schemaFile:
    'https://raw.githubusercontent.com/thatapicompany/apis/main/theCatAPI.com/thecatapi-oas.yaml',
  apiFile: './src/store/services/EmptyApi.ts',
  apiImport: 'EmptyApi',
  outputFile: './src/store/services/PetApi.ts',
  exportName: 'PetApi',
  hooks: true,
  tag: true,
  filterEndpoints: (operationName, operationDefinition) => {
    if (EXCLUDED_OPERATIONS.includes(operationName)) {
      return false;
    }

    const tagsForOperation = operationDefinition.operation.tags ?? [];
    return !EXCLUDED_TAGS.some((tag) => tagsForOperation.includes(tag));
  },
};

export default config;
