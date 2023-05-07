<template>
  <component :is="`prose-h${level}`" :id="hash(node)" v-bind="node.attrs"><slot /></component>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";
import { hash } from "ohash";

const props = defineProps<{ node: JsonNode }>();

const level = computed(() => props.node.attrs?.level ?? 1);
</script>
