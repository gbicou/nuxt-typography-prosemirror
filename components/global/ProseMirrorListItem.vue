<template>
  <prose-li :id="hash(node)">
    <slot />
  </prose-li>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import {hash} from "ohash";

defineProps<{ node: JsonNode }>()
</script>
