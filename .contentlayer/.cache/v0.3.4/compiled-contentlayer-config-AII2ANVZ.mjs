// contentlayer.config.js
import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: `event/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", description: "Event title", required: true },
    excerpt: {
      type: "string",
      description: "Event description",
      required: true
    },
    image: {
      type: "string",
      description: "Event-Main-Image",
      required: true
    },
    date: {
      type: "date",
      description: "Event date",
      required: true
    },
    author: {
      type: "string",
      description: "futmej Writing team",
      required: true
    },
    categories: {
      type: "list",
      of: Category,
      description: "Categories of Events",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}));
var Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "Category title",
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Event]
});
export {
  Category,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AII2ANVZ.mjs.map
