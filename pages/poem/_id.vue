<template>
  <div><PoemDetail /></div>
</template>

<script>
import PoemDetail from '@@/components/poem/PoemDetail.vue'

export default {
  components: {
    PoemDetail,
  },
}
</script>

<style lang="scss">
p:empty::before {
  content: ' ';
  white-space: pre;
}
</style>
