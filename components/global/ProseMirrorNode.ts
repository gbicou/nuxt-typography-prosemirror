import { h, resolveComponent, Text } from 'vue'
import {JsonNode} from "../../prosemirror.schema";

interface ProseMirrorNodeProps {
  node: JsonNode
  markIndex?: number
}

const ProseMirrorNode = defineComponent<ProseMirrorNodeProps>({
  name: "ProseMirrorNode",
  props: ['node', 'markIndex'] as unknown as undefined,
  setup(props, { slots, attrs, emit }) {

    const markIndex = props.markIndex ?? 0
    const mark = props.node.marks?.at(markIndex)

    if (mark !== undefined) {
      const markComponent = resolveComponent('prose-mirror-' + mark.type)
      return () => h(markComponent, { node: props.node, mark }, () => h(
        ProseMirrorNode, { node: props.node, markIndex: markIndex + 1 }
      ))
    }

    if (props.node.type == "text") {
      return () => props.node.text
    }
    const proseComponent = resolveComponent('prose-mirror-' + props.node.type)
    return () =>  h(proseComponent, {
      ...props
      }, () => props.node.content?.map((child) => h(ProseMirrorNode, { node: child }))
    )
 }
})

export default ProseMirrorNode;
