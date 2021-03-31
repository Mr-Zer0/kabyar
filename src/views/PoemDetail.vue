<template>
  <div id="poem">
    <Poem />
  </div>
</template>

<script>
// @ is an alias to /src
import Poem from '@/components/Poem.vue'

export default {
  name: 'PoemDetail',
  components: {
    Poem
  }
}
</script>

<style lang="scss" scoped>
#poem {
  min-height: 100%;
}
</style>
