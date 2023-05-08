<template>
  <div id="split">
    <section id="render">
      <prose-mirror-node v-if="doc" :node="doc" />
    </section>
    <section id="data">
      <p>Source:</p>
      <pre>{{ doc }}</pre>
    </section>
    <section id="editor">
      <p>Editor:</p>
      <editor-content v-if="editor" :editor="editor" />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";
import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const doc = ref<JsonNode | null>(null);

const editor = useEditor({
  content: doc.value,
  extensions: [StarterKit],
  onUpdate: () => {
    doc.value = editor.value?.getJSON();
  },
});
</script>

<style lang="postcss">
.ProseMirror {
  min-height: 300px;
  overflow-y: auto;
}
</style>

<style scoped lang="postcss">
#split {
  display: flex;
  > section {
    &#render {
      width: 60ch;
      margin: 0 $dt("space.16");
    }
    &#data {
      width: 60ch;
      > pre {
        overflow: scroll;
        font-size: $dt("fontSize.xs");
      }
    }
    &#editor {
      min-width: 80ch;
    }
  }
}
</style>
