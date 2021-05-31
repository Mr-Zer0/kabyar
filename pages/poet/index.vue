<template>
  <div class="container">
    <p v-if="$fetchState.pending">Loading ...</p>

    <NuxtLink
      v-for="(poet, index) in poets"
      v-else
      :key="index"
      :to="'/poet/' + poet.id"
      class="cards"
    >
      <PoetCard
        :name="poet.name"
        :bio="poet.bio"
        :poems="poet.poem_count"
        :color="poet.color"
      />
    </NuxtLink>
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

<style lang="scss" scoped>
.container {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  .cards {
    margin: 10px 0;
  }
}
</style>
