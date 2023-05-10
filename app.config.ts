export default defineAppConfig({
  typographyProsemirror: {
    typeMap: {
      // doc: "ProseMirrorDoc",
      paragraph: "ProseP",
      code: "ProseCodeInline",
      code_block: "ProseMirrorCodeBlock",
      link: "ProseA",
      horizontalRule: "ProseHr",
      horizontal_rule: "ProseHr",
      bold: "ProseStrong",
      strong: "ProseStrong",
      italic: "ProseEm",
      em: "ProseEm",
      blockquote: "ProseBlockquote",
      bulletList: "ProseUl",
      bullet_list: "ProseUl",
      orderedList: "ProseOl",
      ordered_list: "ProseOl",
      listItem: "ProseLi",
      list_item: "ProseLi",
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
