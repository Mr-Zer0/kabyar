<template>
  <div class="container">
    <p v-if="$fetchState.pending">Loading ...</p>

    <PoetCard
      v-for="(poet, index) in poets"
      v-else
      :key="index"
      :name="poet.name"
    />
  </div>
</template>

<script>
import PoetCard from '~/components/PoetCard.vue'

export default {
  components: {
    PoetCard,
  },
  async fetch() {
    if (this.poets.length > 0) return

    try {
      const result = await this.$axios.get('/poets/all')

      this.$store.commit('poet/setPoets', result.data.data)
    } catch (error) {}
  },
  computed: {
    poets() {
      return this.$store.state.poet.poets
    },
  },
}
</script>
