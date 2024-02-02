export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'main_image_text',
      title: 'Main Image text',
      type: 'string',
    },
    {
      name: 'our_story_image',
      title: 'Our Story Image',
      type: 'image',
    },
    {
      name: 'our_story_heading',
      title: 'Our Story Heading',
      type: 'string',
    },
    {
      name: 'our_story_text',
      title: 'Our Story Text',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
