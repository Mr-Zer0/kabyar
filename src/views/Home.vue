<template>
  <div id="contents">
    <PoemCard
      v-for="poem in poems"
      :key="poem.id"
      :title="poem.title"
      :content="poem.content"
      :poet="poem.author"
      :type="poem.type"
      :era="poem.era"
      :color="poem.color"
    />
  </div>
</template>

<script>
import poems from '@/store/data.json'
import MagicGrid from 'magic-grid'
import PoemCard from '@/components/PoemCard.vue'

export default {
  name: 'Home',
  components: {
    PoemCard
  },
  data () {
    return {
      grid: null,
      poems
    }
  },
  computed: {
    gutter () {
      return (window.innerWidth <= 576) ? 7 : 15
    }
  },
  mounted () {
    this.grid = new MagicGrid({
      container: '#contents',
      static: false,
      animate: true,
      items: 5,
      maxColumns: 6,
      gutter: this.gutter
    })

    this.grid.positionItems()

    const events = ['load', 'resize']

    events.forEach(element => {
      window.addEventListener(element, () => {
        this.grid.positionItems()
      })
    })
  }
}
</script>
