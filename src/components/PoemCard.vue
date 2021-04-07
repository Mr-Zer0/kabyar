<template>
  <article
    class="poem-card"
    :style="'background: ' + color"
    @click="redirect"
  >
    <div class="poem-info">
      <span class="poem-poet" v-text="poet" />
      <span class="poem-type" v-text="type" />
    </div>
    <h4 v-text="title" />
    <div class="poem-content" v-html="excerpt" />
  </article>
</template>

<script>
export default {
  name: 'PoemCard',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    poet: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    era: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    excerpt () {
      const arr = this.content.split('</p>')

      if (arr.length <= 20) return this.content

      const counter = Math.ceil(arr.length * 0.4)
      const poem = arr.splice(0, counter)

      return poem.join('</p>') + '</p><p>...</p>'
    }
  },
  methods: {
    redirect () {
      this.$store.commit('poem/setTitle', this.title)
      this.$store.commit('poem/setContent', this.content)
      this.$store.commit('poem/setPoet', this.poet)
      this.$store.commit('poem/setType', this.type)
      this.$store.commit('poem/setEra', this.era)
      this.$store.commit('poem/setColor', this.color)
      this.$router.push('Poem')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/_variables.scss';

.poem-card {
  width: 240px;
  background: antiquewhite;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: $sm) {
    width: 47%;
  }

  .poem-info {
    display: flex;
    flex-direction: column;
    border-left: 4px solid #606060;
    padding: 0 5px;

    span {
      font-size: 85%;
    }
  }

  h4 {
    padding: 7px 0 12px 0;
  }
}
</style>
