<template>
  <prose-ul :id="hash(node)">
    <slot />
  </prose-ul>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import {hash} from "ohash";

defineProps<{ node: JsonNode }>()
</script>
