<template>
  <div id="contents">
    <PoemCard
      v-for="(poem, index) in poems"
      :key="index"
      :title="poem.title"
      :content="poem.content"
      :poet="poem.poet"
      :type="poem.type"
      :era="poem.era"
      :color="poem.color"
    />
  </div>
</template>

<script>
// import MagicGrid from 'magic-grid'
import PoemCard from '@/components/PoemCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    PoemCard
  },
  data () {
    return {
      grid: null
    }
  },
  computed: {
    gutter () {
      return (window.innerWidth <= 576) ? 7 : 15
    },
    ...mapState({
      poems: state => state.poems.poems
    })
  },
  mounted () {
    // this.grid = new MagicGrid({
    //   container: '#contents',
    //   static: false,
    //   animate: true,
    //   items: 7,
    //   maxColumns: 6,
    //   gutter: this.gutter
    // })

    // this.grid.positionItems()

    // const events = ['load', 'resize']

    // events.forEach(element => {
    //   window.addEventListener(element, () => {
    //     this.grid.positionItems()
    //   })
    // })
  }
}
</script>
