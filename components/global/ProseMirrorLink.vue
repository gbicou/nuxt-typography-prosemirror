<template>
  <prose-a :id="hash(node)" v-bind="mark.attrs"><slot /></prose-a>
</template>

<script setup lang="ts">
import type { JsonMark, JsonNode } from "../../types";
import { hash } from "ohash";
defineProps<{ node: JsonNode; mark: JsonMark }>();
</script>
