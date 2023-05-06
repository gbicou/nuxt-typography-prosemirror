<template>
  <prose-li :id="hash(node)" v-bind="node.attrs">
    <slot />
  </prose-li>
</template>

<script setup lang="ts">
import { JsonNode } from "../../types";
import { hash } from "ohash";

defineProps<{ node: JsonNode }>();
</script>
