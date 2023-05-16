<template>
  <div id="split">
    <section id="render">
      <prose-mirror-node :node="json" />
    </section>
    <section id="data">
      <p>Source:</p>
      <pre>{{ json }}</pre>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";

defineProps<{
  json: JsonNode;
}>();
</script>

<style scoped lang="postcss">
#split {
  display: flex;
  > section {
    &#render {
      width: 60ch;
      margin: 0 $dt("space.16");
    }

    &#data {
      pre {
        max-width: 120ch;
        max-height: 80vh;
        overflow: scroll;
        font-size: $dt("fontSize.xs");
      }
    }
  }
}
</style>
