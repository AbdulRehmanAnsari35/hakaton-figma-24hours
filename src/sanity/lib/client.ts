import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 's3a2qhkk', 
  dataset: 'production', 
  apiVersion: '2023-01-01', 
  useCdn: true, 
});