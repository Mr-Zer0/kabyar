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
  background: #91ddf2;
}
</style>
