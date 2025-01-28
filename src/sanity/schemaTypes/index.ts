import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { categorySchema } from './categories'
import faq from './faq'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema, faq ],
}
