// lib/sanity.js
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 's3a2qhkk', // Replace with your Sanity Project ID
  dataset: 'production', // Replace with your Sanity dataset name
  apiVersion: '2023-01-01', // API version
  useCdn: true, // Use CDN for faster responses
});
