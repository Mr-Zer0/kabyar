<template>
  <TopBar />
  <router-view/>
  <BottomBar />
</template>

<script>
import TopBar from '@/components/UI/TopBar.vue'
import BottomBar from '@/components/UI/BottomBar.vue'

export default {
  components: {
    BottomBar,
    TopBar
  }
}
</script>

<style lang="scss">
@import './assets/style/style.scss';
</style>
