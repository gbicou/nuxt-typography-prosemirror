import { h, resolveComponent } from "vue";
import { JsonNode } from "../../types";

interface ProseMirrorNodeProps {
  // curent prosemirror node
  node: JsonNode;
  // mark index to render
  mark?: number;
}

const ProseMirrorNode = defineComponent<ProseMirrorNodeProps>({
  name: "ProseMirrorNode",
  props: ["node", "mark"] as unknown as undefined,
  setup(props /*, { slots, attrs, emit }*/) {
    const markIndex = props.mark ?? 0;

    // point to the mark
    const mark = props.node.marks?.at(markIndex);
    if (mark !== undefined) {
      const markComponent = resolveComponent("prose-mirror-" + mark.type);
      // render the current mark
      return () =>
        h(
          markComponent,
          { node: props.node, mark },
          // recurse the next mark for child
          () => h(ProseMirrorNode, { node: props.node, mark: markIndex + 1 })
        );
    }

    // render text as is
    if (props.node.type == "text") {
      return () => props.node.text;
    }

    // render the current node when marks are done
    const proseComponent = resolveComponent("prose-mirror-" + props.node.type);
    return () =>
      h(
        proseComponent,
        props,
        // node content build the children
        () => props.node.content?.map((child) => h(ProseMirrorNode, { node: child }))
      );
  },
});

export default ProseMirrorNode;
