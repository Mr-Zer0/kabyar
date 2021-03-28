<template>
  <article class="poem-card" :style="'background: ' + color">
    <div class="poem-info">
      <span class="poem-poet" v-text="poet" />
      <span class="poem-type" v-text="type" />
    </div>
    <h3 v-text="title" />
    <p v-html="content" />
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
@import '../../assets/style/_variables.scss';

.poem-card {
  width: 240px;
  background: antiquewhite;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  box-sizing: border-box;

  @media (max-width: $sm) {
    width: 47%;
  }

  .poem-info {
    display: flex;
    flex-direction: column;
    border-left: 4px solid #606060;
    padding: 0 5px;

    span {
      font-size: 85%;
    }
  }

  h3 {
    padding: 7px 0 12px 0;
  }
}
</style>
