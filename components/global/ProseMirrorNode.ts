import { h, resolveComponent, toRefs } from "vue";
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

    const { node, mark } = toRefs(props);

    // point to the mark
    const markIndex = computed(() => mark.value ?? 0);
    const markItem = computed(() => node.value.marks?.at(markIndex.value));

    return () => {
      // render the current mark
      if (markItem.value) {
        const componentName = typeMap[markItem.value.type] ?? "prose-mirror-" + markItem.value.type;
        const markComponent = resolveComponent(componentName);
        const markProps = { ...markItem.value.attrs };
        markProps.id ??= hash(markItem.value);
        return h(
          markComponent,
          markProps,
          // recurse the next mark for child
          () => h(ProseMirrorNode, { node: node.value, mark: markIndex.value + 1 })
        );
      }
      // render text as is
      else if (node.value.type === "text") {
        return node.value.text;
      }
      // render the current node when marks are done
      else {
        const componentName = typeMap[node.value.type] ?? "prose-mirror-" + node.value.type;
        const proseComponent = resolveComponent(componentName);
        const proseProps = { ...node.value.attrs };
        proseProps.id ??= hash(node.value);
        return h(
          proseComponent,
          proseProps,
          // node content build the children
          () => node.value.content?.map((child) => h(ProseMirrorNode, { node: child }))
        );
      }
    };
  },
});

export default ProseMirrorNode;
