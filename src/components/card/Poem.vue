<template>
  <article class="poem-card" :style="'background: ' + color">
    <h3 v-text="title" />
    <p v-text="content" />
  </article>
</template>

<script>
export default {
  name: 'PoemCard',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    poet: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    era: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .poem-card {
    width: 230px;
    background: antiquewhite;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
</style>
