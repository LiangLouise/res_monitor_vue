<template>
  <div id="app">
    <TitleBar :title=programName></TitleBar>
    <router-view id="main"></router-view>
  </div>
</template>

<script>
  import TitleBar from "./components/TitleBar";
  export default {
    name: 'res_monitor_vue',
    components: {TitleBar},
    data() {
      return {
        programName: 'Resource Monitor'
      }
    }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
    margin: 0;
  }

  #app {
    overflow-y: hidden;
  }

</style>
