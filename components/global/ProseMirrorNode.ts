import { h, resolveComponent, Text } from 'vue'
import {JsonNode} from "../../prosemirror.schema";

interface ProseMirrorNodeProps {
  node: JsonNode
}

const ProseMirrorNode = defineComponent<ProseMirrorNodeProps>({
  name: "ProseMirrorNode",
  props: ['node'] as unknown as undefined,
  setup(props, { slots, attrs, emit }) {
    if (props.node.type == "text") {
      return () => props.node.text
    }
    const proseComponent = resolveComponent('prose-mirror-' + props.node.type)
    return () => h(proseComponent, {
      ...props
      }, () => props.node.content?.map((child) => h(ProseMirrorNode, { node: child }))
    )
 }
})

export default ProseMirrorNode;
