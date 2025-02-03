import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "price_id",
      title: "Stripe Price Id",
      type: "string",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Office", value: "office" },
          {
            title: "Home",
            value: "home",
          },
          { title: "Expensive", value: "expensive" },
        ],
      },
    },
    {
      name: "rating",
      title: "Product Rating",
      type: "object",
      fields: [
        {
          name: "score",
          title: "Average Rating",
          type: "number",
          validation: (Rule) => Rule.min(1).max(5),
          description: "Rating from 1 to 5",
        },
        {
          name: "count",
          title: "Review Count",
          type: "number",
          validation: (Rule) => Rule.min(0),
          description: "Total number of reviews",
        },
      ],
    },
  ],
});
