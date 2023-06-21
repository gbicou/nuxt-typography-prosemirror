<script setup lang="ts">
// prosemirror document
const node = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Simple" }],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "This is a " },
        { type: "text", marks: [{ type: "strong" }], text: "basic" },
        { type: "text", text: " example." },
      ],
    },
    // ...
  ],
};
</script>

<template>
  <!-- render document through nuxt typography -->
  <prose-mirror-node :node="node" />
</template>
