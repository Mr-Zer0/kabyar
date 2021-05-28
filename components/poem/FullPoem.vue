<template>
  <div class="poem">
    <h1 v-text="title" />
    <div class="content">
      <p v-for="(elem, index) in content" :key="index" v-text="elem" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.poem {
  padding: 15px;
}
</style>
