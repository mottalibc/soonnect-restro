import { defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineType({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineType({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
