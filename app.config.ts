export default defineAppConfig({
  typographyProsemirror: {
    typeMap: {
      // doc: "ProseMirrorDoc",
      paragraph: "ProseP",
      code: "ProseCodeInline",
      link: "ProseA",
      horizontalRule: "ProseHr",
      bold: "ProseStrong",
      italic: "ProseEm",
      blockquote: "ProseBlockquote",
      bulletList: "ProseUl",
      orderedList: "ProseOl",
      listItem: "ProseLi",
      image: "ProseImg",
      tableRow: "ProseTr",
      tableHeader: "ProseTh",
      tableCell: "ProseTd",
    },
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    typographyProsemirror?: {
      /** Map node types to component names */
      typeMap?: Record<string, string>;
    };
  }
}
