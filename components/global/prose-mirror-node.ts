import { h, resolveComponent, toRefs } from "vue";
import { snakeCase, kebabCase } from "change-case";
import type { JsonNode } from "../../types";

interface ProseMirrorNodeProperties {
  // curent prosemirror node
  node: JsonNode;
  // mark index to render
  mark?: number;
}

const ProseMirrorNode = defineComponent<ProseMirrorNodeProperties>({
  name: "ProseMirrorNode",
  props: ["node", "mark"] as unknown as undefined,
  setup(properties) {
    const {
      typographyProsemirror: { typeMap },
    } = useAppConfig();

    const { node, mark } = toRefs(properties);

    // point to the mark
    const markIndex = computed(() => mark.value ?? 0);
    const markItem = computed(() => node.value.marks?.at(markIndex.value));

    return () => {
      // render the current mark
      if (markItem.value) {
        const markType = snakeCase(markItem.value.type);
        const componentName = typeMap[markType] ?? "prose-mirror-" + kebabCase(markItem.value.type);
        const markComponent = resolveComponent(componentName);
        const markProperties = { ...markItem.value.attrs };
        return h(
          markComponent,
          markProperties,
          // recurse the next mark for child
          () => h(ProseMirrorNode, { node: node.value, mark: markIndex.value + 1 }),
        );
      }
      // render text as is
      else if (node.value.type === "text") {
        return node.value.text;
      }
      // render the current node when marks are done
      else {
        const nodeType = snakeCase(node.value.type);
        const componentName = typeMap[nodeType] ?? "prose-mirror-" + kebabCase(node.value.type);
        const proseComponent = resolveComponent(componentName);
        const proseProperties = { ...node.value.attrs };
        proseProperties.node = node.value;
        return h(
          proseComponent,
          proseProperties,
          // node content build the children
          () => node.value.content?.map((child) => h(ProseMirrorNode, { node: child })),
        );
      }
    };
  },
});

export default ProseMirrorNode;
