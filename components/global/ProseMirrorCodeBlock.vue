<template>
  <prose-code :id="hash(node)" v-bind="node.attrs">
    <pre><code><slot /></code></pre>
  </prose-code>
</template>

<script setup lang="ts">
import { JsonNode } from "../../prosemirror.schema";
import { hash } from "ohash";

defineProps<{ node: JsonNode }>();
</script>
