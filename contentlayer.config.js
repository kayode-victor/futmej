import {
  defineNestedType,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: `event/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", description: "Event title", required: true },
    excerpt: {
      type: "string",
      description: "Event description",
      required: true,
    },

    image: {
      type: "string",
      description: "Event-Main-Image",
      required: true,
    },
    date: {
      type: "date",
      description: "Event date",
      required: true,
    },
    author: {
      type: "string",
      description: "futmej Writing team",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "Categories of Events",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));
export const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "Category title",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Event],
});
