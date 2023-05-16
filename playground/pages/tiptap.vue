<template>
  <div id="split">
    <section id="render">
      <prose-mirror-node v-if="json" :node="json" />
    </section>
    <section id="data">
      <p>Source:</p>
      <pre>{{ json }}</pre>
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

const json = ref<JsonNode | false>(false);

const editor = useEditor({
  // content: json.value,
  extensions: [StarterKit],
  onUpdate: () => {
    json.value = editor.value?.getJSON() as JsonNode;
  },
});
</script>

<style lang="postcss">
.ProseMirror {
  min-height: 300px;
  overflow-y: auto;

  background-clip: padding-box;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.2);

  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
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
      padding: 0 $dt("space.8");
      min-width: 80ch;
    }
  }
}
</style>
