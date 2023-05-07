<template>
  <prose-strong :id="hash(node)" v-bind="mark.attrs">
    <slot />
  </prose-strong>
</template>

<script setup lang="ts">
import type { JsonMark, JsonNode } from "../../types";
import { hash } from "ohash";

defineProps<{ node: JsonNode; mark: JsonMark }>();
</script>
