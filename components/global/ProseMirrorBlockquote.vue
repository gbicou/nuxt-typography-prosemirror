<template>
  <prose-blockquote :id="hash(node)">
    <slot />
  </prose-blockquote>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import {hash} from "ohash";

defineProps<{ node: JsonNode }>()
</script>
