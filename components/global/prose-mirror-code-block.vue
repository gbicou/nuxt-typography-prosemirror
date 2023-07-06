<template>
  <prose-code v-bind="$attrs" :code="code">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="shikiEnable && shikiHtml" v-html="shikiHtml" />
    <pre v-else><code><slot /></code></pre>
  </prose-code>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";

const {
  typographyProsemirror: { shiki },
} = useAppConfig();

const properties = defineProps<{
  node: JsonNode;
  language?: string;
}>();

const code = computed(() => properties.node.content?.map((node) => node.text).join("\n") ?? "");

const shikiEnable = computed(() => shiki && properties.language);

const shikiHighlighter = computedAsync(async () => {
  if (shikiEnable.value) {
    const { getHighlighter } = await import("shiki-es");
    return await getHighlighter({ theme: shiki.theme, langs: [properties.language] });
  }
});

const shikiHtml = computed(() => {
  return shikiHighlighter.value?.codeToHtml(code.value, { lang: properties.language });
});
</script>
