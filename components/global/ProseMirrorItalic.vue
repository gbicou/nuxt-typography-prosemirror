<template>
  <prose-em :id="hash(node)" v-bind="mark.attrs">
    <slot />
  </prose-em>
</template>

<script setup lang="ts">
import { JsonMark, JsonNode } from "../../prosemirror.schema";
import { hash } from "ohash";

defineProps<{ node: JsonNode; mark: JsonMark }>();
</script>
