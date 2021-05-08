<template>
  <div class="poem-card">
    <div class="poem-info">
      <span class="poem-poet" v-text="poet" />
      <span class="poem-type" v-text="type" />
    </div>
    <h3>{{ title }}</h3>
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
  },
}
</script>
