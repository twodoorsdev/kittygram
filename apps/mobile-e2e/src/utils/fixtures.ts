import * as path from 'node:path';
import { openAsBlob } from 'node:fs';
import { lookup } from 'mime-types';

const fixturesPath = path.resolve(__dirname, '../__fixtures__');

export const getFixture = async (fixtureName: string) => {
  const resolvedPath = path.resolve(fixturesPath, fixtureName);
  const mimeType = lookup(resolvedPath) || 'image/jpg';
  return openAsBlob(resolvedPath, { type: mimeType });
};
