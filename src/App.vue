<template>
  <router-view/>

  <BottomBar />
</template>

<script>
import BottomBar from '@/components/UI/BottomBar.vue'

export default {
  components: {
    BottomBar
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'MyanmarSansPro';
  src: url('./assets/fonts/MyanmarSansProRegular.woff2');
}

body {
  padding: 0;
  margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, MyanmarSansPro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
