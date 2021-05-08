<template>
  <div class="container">
    <PoemCard
      v-for="(poem, index) in poems"
      :key="index"
      :title="poem.title"
      :poem="poem.poem"
      :poet="poem.poet"
      :type="poem.type"
    />
  </div>
</template>

<script>
import PoemCard from '@@/components/PoemCard.vue'

export default {
  components: {
    PoemCard,
  },
  data() {
    return {
      poems: [],
    }
  },
  async fetch() {
    try {
      const query = await this.$axios.get(
        process.env.baseUrl + '/api/v1/poems/all'
      )

      this.poems = query.data.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
</script>
