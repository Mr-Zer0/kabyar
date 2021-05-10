<template>
  <div id="container">
    <NuxtLink
      v-for="(poem, index) in poems"
      :key="index"
      :to="'/poem/' + poem.id"
    >
      <PoemCard
        :title="poem.title"
        :poem="poem.poem"
        :poet="poem.poet"
        :type="poem.type"
        :color="poem.color"
      />
    </NuxtLink>
  </div>
</template>

<script>
import MagicGrid from 'magic-grid'
import PoemCard from '~/components/poem/PoemCard.vue'

export default {
  components: {
    PoemCard,
  },
  data() {
    return {
      grid: null,
    }
  },
  async fetch() {
    if (this.$store.state.poem.poems.length > 0) return

    try {
      const query = await this.$axios.get(
        process.env.baseUrl + '/api/v1/poems/all'
      )

      this.$store.commit('poem/setPoems', query.data.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  computed: {
    gutter() {
      return window.innerWidth <= 576 ? 7 : 15
    },
    poems() {
      return this.$store.state.poem.poems
    },
    fetching() {
      return this.$fetchState.pending
    },
  },
  mounted() {
    if (this.poems.length > 0) {
      this.makeGrid()
    }
  },
  updated() {
    this.makeGrid()
  },
  beforeDestroy() {
    const events = ['resize', 'load']
    events.forEach((elem) => {
      window.removeEventListener(elem, () => {})
    })
  },
  methods: {
    makeGrid() {
      const grid = new MagicGrid({
        container: '#container',
        static: false,
        animate: true,
        items: 20,
        maxColumns: 6,
        gutter: this.gutter,
      })

      grid.positionItems()

      const events = ['resize', 'load']
      events.forEach((elem) => {
        window.addEventListener(elem, () => {
          grid.positionItems()
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#container {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

<style lang="scss">
p:empty::before {
  content: ' ';
  white-space: pre;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
