<template>
  <div id="app" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
      <header class="masthead mb-auto">
        <MyHeader></MyHeader>
      </header>

      <main class="inner cover">
        <router-view/>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          A D&D app for Kasutajaliidesed, by <a href="http://www.linkedin.com/in/andres-rüütel">Andres</a>.
        </div>
      </footer>

  </div>
</template>

<style lang="less" scoped>

  @import "assets/cover.css";
  @import "assets/stylesheet";
</style>
<script>
  import MyHeader from "./components/MyHeader";
  export default {
    name: 'App',
    components: {MyHeader}
  };
</script>
