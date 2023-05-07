import { h, resolveComponent } from "vue";
import type { JsonNode } from "../../types";
import { hash } from "ohash";

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
    const {
      typographyProsemirror: { typeMap },
    } = useAppConfig();

    const markIndex = props.mark ?? 0;

    // point to the mark
    const mark = props.node.marks?.at(markIndex);
    if (mark !== undefined) {
      const componentName = typeMap[mark.type] ?? "prose-mirror-" + mark.type;
      const markComponent = resolveComponent(componentName);
      // render the current mark
      return () =>
        h(
          markComponent,
          { id: hash(mark), ...mark.attrs },
          // recurse the next mark for child
          () => h(ProseMirrorNode, { node: props.node, mark: markIndex + 1 })
        );
    }

    // render text as is
    if (props.node.type == "text") {
      return () => props.node.text;
    }

    // render the current node when marks are done
    const componentName = typeMap[props.node.type] ?? "prose-mirror-" + props.node.type;
    const proseComponent = resolveComponent(componentName);
    return () =>
      h(
        proseComponent,
        { id: hash(props.node), ...props.node.attrs },
        // node content build the children
        () => props.node.content?.map((child) => h(ProseMirrorNode, { node: child }))
      );
  },
});

export default ProseMirrorNode;
