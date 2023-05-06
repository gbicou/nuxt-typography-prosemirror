<template>
  <prose-ol :id="hash(node)" v-bind="node.attrs">
    <slot />
  </prose-ol>
</template>

<script setup lang="ts">
import { JsonNode } from "../../prosemirror.schema";
import { hash } from "ohash";

defineProps<{ node: JsonNode }>();
</script>
