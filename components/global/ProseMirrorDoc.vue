<template>
  <div :id="h">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {JsonNode} from "../../prosemirror.schema";
import { hash } from "ohash";

const props = defineProps<{ node: JsonNode }>()

const h = hash(props.node)
</script>


