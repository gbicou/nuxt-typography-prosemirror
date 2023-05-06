export default defineNuxtConfig({
  extends: "@bicou/nuxt-typography-prosemirror",
  modules: ["@nuxt-themes/tokens"],
  experimental: {
    payloadExtraction: false,
  },
});
