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
@import './assets/style/_reset.scss';

@font-face {
  font-family: 'MyanmarSansPro';
  src: url('./assets/fonts/MyanmarSansProRegular.woff2');
}

#app {
  font-family: Avenir, Helvetica, Arial, MyanmarSansPro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
