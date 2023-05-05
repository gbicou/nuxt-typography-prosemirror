<template>
  <prose-p :id="hash(node)">
    <slot />
  </prose-p>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import {hash} from "ohash";

defineProps<{ node: JsonNode }>()
</script>
