export default defineAppConfig({
  typographyProsemirror: {
    typeMap: {
      doc: "prose-mirror-document",
      paragraph: "prose-p",
      code: "prose-code-inline",
      code_block: "prose-mirror-code-block",
      link: "prose-a",
      horizontal_rule: "prose-hr",
      bold: "prose-strong",
      strong: "prose-strong",
      italic: "prose-em",
      em: "prose-em",
      blockquote: "prose-blockquote",
      bullet_list: "prose-ul",
      ordered_list: "prose-ol",
      list_item: "prose-li",
      image: "prose-img",
      table_row: "prose-tr",
      table_header: "prose-th",
      table_cell: "prose-td",
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
