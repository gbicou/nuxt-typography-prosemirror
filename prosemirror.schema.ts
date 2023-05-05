import {MarkSpec, NodeSpec, Schema} from "prosemirror-model";

export interface JsonMark {
  type: string;
  attrs?: Record<string, any>;
}

export interface JsonNode {
  type: string;
  marks?: JsonMark[];
  content?: JsonNode[];
  text?: string;
  attrs?: Record<string, any>;
}


interface NuxtNodeSpec extends NodeSpec {
  component: string
}

interface NuxtMarkSpec extends MarkSpec {
  component: string
}

const nodes = {

  /// A horizontal rule (`<hr>`).
  horizontal_rule: {
    group: "block",
    component: "Hr"
  } as NuxtNodeSpec,

  /// An inline image (`<img>`) node. Supports `src`,
  /// `alt`, and `href` attributes. The latter two default to the empty
  /// string.
  image: {
    inline: true,
    attrs: {
      src: {},
      alt: {default: null},
      title: {default: null}
    },
    group: "inline",
    draggable: true,
    component: "Image",
  } as NuxtNodeSpec,

}

const marks = {
  /// A link. Has `href` and `title` attributes. `title`
  /// defaults to the empty string. Rendered and parsed as an `<a>`
  /// element.
  link: {
    attrs: {
      href: {},
      title: {default: null}
    },
    inclusive: false,
    component: "Link"
  } as NuxtMarkSpec,

  /// An emphasis mark. Rendered as an `<em>` element. Has parse rules
  /// that also match `<i>` and `font-style: italic`.
  em: {
    component: "Em"
  } as NuxtMarkSpec,

  /// A strong mark. Rendered as `<strong>`, parse rules also match
  /// `<b>` and `font-weight: bold`.
  strong: {
    component: "Strong"
  } as NuxtMarkSpec,

  /// Code font mark. Represented as a `<code>` element.
  code: {
    component: "Code"
  } as NuxtMarkSpec,

  italic: {
    component: "Italic"
  } as NuxtMarkSpec,

  bold: {
    component: "Bold"
  } as NuxtMarkSpec,
}

export const schema = new Schema({nodes, marks})
