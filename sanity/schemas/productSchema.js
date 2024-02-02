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
      type: 'string',
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
    },
    {
      name: 'in_stock',
      title: 'In Stock',
      type: 'boolean',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'handlebar_type',
      title: 'HandleBar',
      type: 'string',
    },
    {
      name: 'speeds',
      title: 'Speeds',
      type: 'string',
    },
    {
      name: 'rack',
      title: 'Rack',
      type: 'string',
    },
    {
      name: 'mudguard',
      title: 'Mudguard',
      type: 'string',
    },
    {
      name: 'chainring',
      title: 'Chainring',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
  ],
}
