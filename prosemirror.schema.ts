import { MarkSpec, NodeSpec, Schema } from "prosemirror-model";

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
  component: string;
}

interface NuxtMarkSpec extends MarkSpec {
  component: string;
}

const nodes = {
  /// An inline image (`<img>`) node. Supports `src`,
  /// `alt`, and `href` attributes. The latter two default to the empty
  /// string.
  image: {
    inline: true,
    attrs: {
      src: {},
      alt: { default: null },
      title: { default: null },
    },
    group: "inline",
    draggable: true,
    component: "Image",
  } as NuxtNodeSpec,
};

const marks = {
  /// A link. Has `href` and `title` attributes. `title`
  /// defaults to the empty string. Rendered and parsed as an `<a>`
  /// element.
  link: {
    attrs: {
      href: {},
      title: { default: null },
    },
    inclusive: false,
    component: "Link",
  } as NuxtMarkSpec,
};

export const schema = new Schema({ nodes, marks });
