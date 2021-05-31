<template>
  <section class="container">
    <h1 v-text="title" />
    <div class="content">
      <p v-for="(elem, index) in content" :key="index" v-text="elem" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => {
        return []
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 15px;
}
</style>
