import { defineType } from "sanity";

export const categories = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    defineType({
      name: "title",
      title: "Category",
      type: "string",
    }),
    defineType({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
