<template>
  <div>
    <TopBar />
    <Nuxt />
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
</style>

<style>
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
