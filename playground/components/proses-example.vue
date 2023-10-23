<template>
  <div id="split">
    <section id="data">
      <p>Source:</p>
      <div class="source" v-html="source" />
    </section>
    <section id="render">
      <div class="d">
        <prose-mirror-node :node="json" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getHighlighter } from "shiki-es";
import type { JsonNode } from "../../types";

const props = defineProps<{
  json: JsonNode;
}>();

const shiki = await getHighlighter({ theme: "nord", langs: ["json"] });

const source = computed(() => shiki.codeToHtml(JSON.stringify(props.json, null, 2), { lang: "json" }))
</script>

<style scoped>
:global(pre.shiki) {
  max-width: 45vw;
  overflow-x: scroll;
}

#split {
  display: flex;
  > section {
    flex-basis: 50%;
    &#render {
      margin: 0 $dt("space.16");

      .d {
        position: sticky;
        top: $dt("space.16");
      }
    }

    &#data {
      .source {
        font-size: $dt("fontSize.sm");
        line-height: $dt("lead.tight");
        letter-spacing: $dt("letterSpacing.tight");
      }
    }
  }
}
</style>
