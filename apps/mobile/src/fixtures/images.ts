export type Breed = {
  id: number;
  name: string;
  wikipedia_url: string;
};

export type ApiImage = {
  id: string;
  url: string;
  width: number | null;
  height: number | null;
  mime_type: string;
  entities: [];
  breeds: Breed[];
  animals: [];
  categories: [];
};

export const images: ApiImage[] = [
  {
    id: 'S1bsCGxrf',
    url: 'http://78.media.tumblr.com/2bc94b9eec2d00f5d28110ba191da896/tumblr_nyled8DYKd1qg9kado1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [
      {
        id: 3,
        name: 'Alaskan Malamute',
        wikipedia_url: 'https://en.wikipedia.org/wiki/Alaskan_Malamute',
      },
      {
        id: 2,
        name: 'Akita',
        wikipedia_url: 'https://en.wikipedia.org/wiki/Akita_(dog)',
      },
    ],
    animals: [],
    categories: [],
  },
  {
    id: 'B1gZsCMgrG',
    url: 'http://78.media.tumblr.com/75f7f5ba97da53c61026fe6cad16c97c/tumblr_o8h7llrbDt1rzz2who1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'HJZWiCGgSf',
    url: 'http://78.media.tumblr.com/84f729a7130860dda9b7544664a36094/tumblr_nvgiskSmew1un7zabo3_r1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'HyGWiRfgBM',
    url: 'http://78.media.tumblr.com/6fb13a48907b7d65f79a07afdc9c5ebe/tumblr_nhlytoREfQ1rvsh0oo1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'Bk4-oAzlHM',
    url: 'http://78.media.tumblr.com/4217786db510db68daed375cea8ec4d9/tumblr_nlf1ggSff71ruv93po1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'H1HWiCMxHG',
    url: 'http://78.media.tumblr.com/a9c056e66b11e1a91a9a03d8c0d04e89/tumblr_o7uwyquvpM1qjcdw9o1_1280.png',
    width: null,
    height: null,
    mime_type: 'image/png',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'rkUZsAGeHM',
    url: 'http://78.media.tumblr.com/9666e3107587fa2dd7833033ec42b7ba/tumblr_o0ymimYfp71rozzl0o1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'BkDZjRzlSz',
    url: 'http://78.media.tumblr.com/9b5ed3d0bcd102bb028f137267082777/tumblr_o6zaks1SvQ1qjcdw9o1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'ByuZj0GgBf',
    url: 'http://78.media.tumblr.com/766f297cf8b282cd2820fc4c9161c328/tumblr_o7hktkxin01qjcdw9o1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
  {
    id: 'r1tWjAfxHz',
    url: 'http://78.media.tumblr.com/5230380780945425e867a0a3aaa6f4b0/tumblr_n8w47dGOhd1r7qbtpo1_1280.jpg',
    width: null,
    height: null,
    mime_type: 'image/jpeg',
    entities: [],
    breeds: [],
    animals: [],
    categories: [],
  },
];
