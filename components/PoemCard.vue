<template>
  <div class="poem-card" :style="'background: ' + color">
    <div class="poem-info">
      <span class="poem-poet" v-text="poet" />
      <span class="poem-type" v-text="type" />
    </div>
    <h3 class="poem-title">{{ title }}</h3>
    <div class="poem-content" v-html="poem" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    poem: {
      type: String,
      required: true,
    },
    poet: {
      type: String,
      default: 'အမည်မသိရှေးစာဆို',
    },
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#e3e3e3',
    },
  },
}
</script>

<style lang="scss" scoped>
.poem-card {
  width: 270px;
  border-radius: 5px;
  padding: 7px;
  box-sizing: border-box;
  cursor: pointer;

  .poem-info {
    display: flex;
    flex-direction: column;
    border-left: 4px solid #606060;
    padding: 0 5px;

    span {
      font-size: 0.85em;
    }
  }
}
.poem-title {
  margin: 7px 0 12px 0;
}
</style>
