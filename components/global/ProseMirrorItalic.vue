<template>
  <prose-em :id="hash(node)">
    <slot />
  </prose-em>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import {hash} from "ohash";

defineProps<{ node: JsonNode }>()
</script>
