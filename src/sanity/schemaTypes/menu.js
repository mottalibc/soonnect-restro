import { defineType } from "sanity";

export const menu = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineType({
      name: "title",
      title: "Menu Name",
      type: "string",
    }),
    defineType({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineType({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineType({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineType({
      name: "categories",
      title: "Categories",
      type: "string",
    }),
  ],
});
