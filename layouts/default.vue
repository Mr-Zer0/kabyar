<template>
  <div id="kabyar">
    <TopBar />
    <div class="body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TopBar from '@@/components/ui/TopBar.vue'

export default {
  components: {
    TopBar,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'MyanmarSansPro';
  src: url('~assets/fonts/MyanmarSansProRegular.eot'); /* IE9 Compat Modes */
  src: url('~assets/fonts/MyanmarSansProRegular.eot?#iefix')
      format('embedded-opentype'),
    url('~assets/fonts/MyanmarSansProRegular.woff2') format('woff2'),
    url('~assets/fonts/MyanmarSansProRegular.woff') format('woff'),
    url('~assets/fonts/MyanmarSansProRegular.ttf') format('truetype');
}

html {
  font-family: Avenir, Helvetica, Arial, MyanmarSansPro, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.body {
  padding-top: 70px;
  width: 100%;
  height: 100%;
}
</style>
