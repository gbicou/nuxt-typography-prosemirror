<template>
  <div :id="h" v-bind="node.attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";
import { hash } from "ohash";

const props = defineProps<{ node: JsonNode }>();

const h = hash(props.node);
</script>
