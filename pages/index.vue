<template>
  <div id="container">
    <PoemCard
      v-for="(poem, index) in poems"
      :key="index"
      :title="poem.title"
      :poem="poem.poem"
      :poet="poem.poet"
      :type="poem.type"
      :color="poem.color"
    />
  </div>
</template>

<script>
import PoemCard from '@@/components/PoemCard.vue'
import MagicGrid from 'magic-grid'

export default {
  components: {
    PoemCard,
  },
  data() {
    return {
      poems: [],
      grid: null,
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
  computed: {
    gutter() {
      return window.innerWidth <= 576 ? 7 : 15
    },
  },
  mounted() {
    this.makeGrid()

    const events = ['resize', 'load']

    events.forEach((elem) => {
      window.addEventListener(elem, () => {
        this.grid.positionItems()
      })
    })
  },
  methods: {
    makeGrid() {
      this.grid = new MagicGrid({
        container: '#container',
        static: false,
        animate: true,
        items: 20,
        maxColumns: 6,
        gutter: this.gutter,
      })

      this.grid.positionItems()
    },
  },
}
</script>

<style lang="scss">
p:empty::before {
  content: ' ';
  white-space: pre;
}
</style>
