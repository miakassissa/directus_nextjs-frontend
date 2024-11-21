import { createDirectus, rest, readItems } from '@directus/sdk';

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL as string).with(rest());

/*
const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL as string, {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': '*',
  },
}).with(rest());
*/

export default directus;