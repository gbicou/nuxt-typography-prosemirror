<template>
  <div id="split">
    <section id="render">
      <prose-mirror-node v-if="json" :node="json" />
    </section>
    <section id="data">
      <p>State:</p>
      <pre>{{ state }}</pre>
    </section>
    <section id="editor">
      <p>Editor:</p>
      <div id="pm-editor" />
      <div id="content" style="display: none">
        <p>test</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";

import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";

import "prosemirror-view/style/prosemirror.css";
import "prosemirror-menu/style/menu.css";
import "prosemirror-example-setup/style/style.css";

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks,
});

const json = ref<JsonNode | false>(false);

let state: EditorState = EditorState.create({
  schema: mySchema,
  plugins: exampleSetup({ schema: mySchema }),
});
let view: EditorView | undefined;

onMounted(() => {
  view = new EditorView(document.querySelector("#pm-editor"), {
    state: state,
    dispatchTransaction: (transaction) => {
      state = state.apply(transaction);
      view?.updateState(state);
      json.value = state.doc.toJSON();
    },
  });
});

onUnmounted(() => view?.destroy());
</script>

<style lang="postcss">
.ProseMirror {
  padding: 0.8rem;

  min-height: 300px;
  overflow-y: auto;

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

      #pm-editor {
        background-clip: padding-box;
        border-radius: 4px;
        border: 2px solid rgba(0, 0, 0, 0.2);
        padding: 5px 0 0;
      }
    }
  }
}
</style>
