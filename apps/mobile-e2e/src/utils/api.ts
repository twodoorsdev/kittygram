import { getFixture } from './fixtures';

const getUrl = (endpoint: string) => `https://api.thecatapi.com/v1/${endpoint}`;
const getOptions = (options: RequestInit) => ({
  ...options,
  headers: {
    'x-api-key': process.env.CAT_API_KEY,
    ...options.headers,
  },
});

const makeRequest = async (endpoint: string, options: RequestInit) => {
  const r = await fetch(getUrl(endpoint), getOptions(options));

  if (r.ok && options.method === 'DELETE') {
    return;
  }

  if (r.ok) {
    return r.json();
  }

  const error = await r.text();
  console.error(error);
  throw new Error(error);
};

export const listImages = async () => {
  return makeRequest('images?limit=10', {
    method: 'GET',
  });
};

export const uploadImage = async () => {
  const fileName = 'image.jpg';
  const image = await getFixture(fileName);
  const body = new FormData();
  body.append('file', image, fileName);

  return makeRequest('images/upload', {
    method: 'POST',
    headers: {
      ContentType: 'multipart/form-data',
    },
    body,
  });
};

export const deleteImage = async (imageId: string) => {
  return makeRequest(`images/${imageId}`, {
    method: 'DELETE',
  });
};
