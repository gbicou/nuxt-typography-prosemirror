<template>
  <main>
    <nav id="navigation">
      <router-link to="/">Index</router-link>
      <router-link to="/example">Example</router-link>
      <router-link to="/hr">HR</router-link>
      <router-link to="/image">Image</router-link>
      <router-link to="/uniqid">UniqID</router-link>
      <router-link to="/codeblock">CodeBlock</router-link>
      <router-link to="/ol">OrderedList</router-link>
      <router-link to="/link">Link</router-link>
      <router-link to="/table">Table</router-link>
      <router-link to="/tiptap">TipTap</router-link>
      <router-link to="/editor">ProseMirror</router-link>
    </nav>
    <nuxt-page class="page" />
  </main>
</template>

<style lang="postcss">
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: $dt("typography.body.backgroundColor");
  color: $dt("typography.body.color");
}
#navigation {
  display: flex;
  > a {
    padding: $dt("space.2") $dt("space.3");
  }
  border-bottom: 1px solid $dt("color.black");
}
.page {
  padding: $dt("space.8");
  min-height: 100vh;
}
</style>
