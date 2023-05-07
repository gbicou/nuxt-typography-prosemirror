<template>
  <prose-img :id="hash(node)" v-bind="node.attrs" />
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";
import { hash } from "ohash";
defineProps<{ node: JsonNode }>();
</script>
