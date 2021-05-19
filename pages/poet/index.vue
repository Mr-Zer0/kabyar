<template>
  <div class="container">
    <PoetCard v-for="(poet, index) in poets" :key="index" :name="poet.name" />
  </div>
</template>

<script>
import PoetCard from '~/components/PoetCard.vue'

export default {
  components: {
    PoetCard,
  },
  data: () => ({
    poets: [],
  }),
  async fetch() {
    try {
      const result = await this.$axios.get('/poets/all')

      this.poets = result.data.data
    } catch (error) {}
  },
}
</script>
