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
      :color="randColor()"
    />
  </div>
</template>

<script>
import MagicGrid from 'magic-grid'
import PoemCard from '@/components/card/Poem.vue'

export default {
  name: 'Main',
  components: {
    PoemCard
  },
  data () {
    return {
      poems: [
        {
          id: 1,
          title: 'နွေဦးကာလ မြူထသောခါ',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea.',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 2,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem!',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 3,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea.',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 4,
          title: 'The Title',
          content: 'Itaque optio temporibus in commodi, voluptates voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem!',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 5,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem!',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 6,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem! Lorem ipsum dolor sit amet consectetur.',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 7,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Itaque optio temporibus in commodi, voluptates voluptatem! Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 8,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea.',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        },
        {
          id: 9,
          title: 'The Title',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur autem aliquam eos totam voluptatem eum exercitationem, non neque, voluptate repellendus sunt ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          color: '',
          author: 'Someone',
          type: 'Something',
          era: ''
        }
      ]
    }
  },
  mounted () {
    const mg = new MagicGrid({
      container: '#contents',
      static: false,
      animate: true,
      items: 7,
      maxColumns: 6,
      gutter: 20
    })

    mg.listen()
  },
  methods: {
    randColor () {
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  }
}
</script>
