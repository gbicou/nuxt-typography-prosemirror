<template>
  <component
    v-bind:is="`prose-h${level}`"
    v-bind:id="hash(node)"
    v-bind="$attrs"
  ><slot /></component>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import {hash} from "ohash";

const props = defineProps<{ node: JsonNode }>()

const level = computed(() => props.node.attrs?.level ?? 1)

</script>
