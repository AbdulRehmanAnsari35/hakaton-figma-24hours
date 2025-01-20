
export default {
    
    name: 'product', 
    title: 'Product', 
    type: 'document',
    fields: [
      {
        name: 'name', 
        title: 'Product Name', 
        type: 'string', 
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'image', 
        title: 'Image',
        type: 'image', 
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'stockStatus',
        title: 'Stock Status',
        type: 'string',
        options: {
          list: [
            { title: 'Available', value: 'available' },
            { title: 'Out of Stock', value: 'out-of-stock' },
          ],
        },
      },
    ],
  };
  