// lib/sanity.js
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 's3a2qhkk', 
  dataset: 'production', 
  apiVersion: '2023-01-01', 
  useCdn: false, 
});
