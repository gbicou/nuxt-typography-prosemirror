> **This is now a package of the @bicou/prosemirror-render monorepo :**
> **https://github.com/gbicou/prosemirror-render**

# @bicou/nuxt-typography-prosemirror

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt layer to render [ProseMirror](https://prosemirror.net/) JSON data (from [Tiptap](https://tiptap.dev/) editor for example) through [Nuxt Typography](https://typography.nuxt.space/)

## Setup

Make sure to install the dependencies:

```bash
pnpm install @bicou/nuxt-typography-prosemirror
```

## Usage

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: ['@bicou/nuxt-typography-prosemirror']
})
```

Use the `ProseMirrorNode` component to render the prosemirror node:

```vue
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
```

This example translates to:

```html 
<div>
  <prose-h2>Simple</prose-h2>
  <prose-p>This is a <prose-strong>basic</prose-strong> example.</prose-p>
</div>
```

Consult online demo for more examples : https://nuxt-typography-prosemirror.vercel.app/

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@bicou/nuxt-typography-prosemirror/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@bicou/nuxt-typography-prosemirror

[npm-downloads-src]: https://img.shields.io/npm/dm/@bicou/nuxt-typography-prosemirror.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bicou/nuxt-typography-prosemirror

[license-src]: https://img.shields.io/npm/l/@bicou/nuxt-typography-prosemirror.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bicou/nuxt-typography-prosemirror

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
