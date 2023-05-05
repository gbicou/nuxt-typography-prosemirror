<script setup lang="ts">
import data from "../proses/hr.json";
// import {schema} from "../../prosemirror.schema";
// const doc = schema.nodeFromJSON(data)
</script>

<template>
  <div id="split">
    <section id="render">
      <prose-mirror-node :node="data" />
    </section>
    <section id="data"><p>Source:</p><pre>{{ data }}</pre></section>
  </div>
</template>

<style lang="postcss">
#split {
  display: flex;
  > section {

    &#render {
      width: 60ch;
      margin: 0 $dt('space.16');
    }

    &#data {
      pre {
        max-width: 120ch;
        max-height: 80vh;
        overflow: scroll;
        font-size: $dt('fontSize.xs');
      }
    }
  }
}
</style>
