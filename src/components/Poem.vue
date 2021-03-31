<template>
  <div class="navigation">
    <div>
      <router-link to="/">
        <SvgIcon type="mdi" :path="mdiArrowLeft" :size="24" />
      </router-link>
    </div>
    <div>
      <SvgIcon type="mdi" :path="mdiShareVariant" :size="24" />
      <SvgIcon
        type="mdi"
        :path="mdiMessageAlert"
        :size="24"
        style="margin-left: 15px;"
      />
    </div>
  </div>
  <article class="poem-content">
    <h2 class="poem-title" v-text="title" />
    <div class="poem-info">
      <span>
        <SvgIcon type="mdi" :path="mdiAccount" :size="18" />
        <a href="#" v-text="poet" />
      </span>
      <span>
        <SvgIcon type="mdi" :path="mdiLabel" :size="18" />
        <a href="#" v-text="type" />
      </span>

    </div>
    <div class="poem-body" v-html="content" />

  </article>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiArrowLeft,
  mdiShareVariant,
  mdiMessageAlert,
  mdiAccount,
  mdiLabel,
  mdiCalendar
} from '@mdi/js'

export default {
  name: 'Poem',
  components: {
    SvgIcon
  },
  data () {
    return {
      mdiArrowLeft,
      mdiShareVariant,
      mdiMessageAlert,
      mdiAccount,
      mdiLabel,
      mdiCalendar
    }
  },
  computed: {
    title () {
      return this.$store.state.poem.title
    },
    content () {
      return this.$store.state.poem.content
    },
    poet () {
      return this.$store.state.poem.poet
    },
    type () {
      return this.$store.state.poem.type
    },
    era () {
      return this.$store.state.poem.era
    },
    color () {
      return this.$store.state.poem.color
    },
    height () {
      return window.innerHeight
    }
  },
  mounted () {
    const elem = document.getElementById('poem')

    elem.style.background = this.color
    elem.style.minHeight = this.height + 'px'
  }
}
</script>

<style scoped lang="scss">
.navigation {
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box
}

.poem-content {
  max-width: 760px;
  padding: 15px 20px 45px 20px;
  box-sizing: border-box;
  margin: 0 auto;

  .poem-info {
    margin-bottom: 15px;
    margin-top: 5px;

    span {
      display: inline-flex;
      align-items: center;
      margin-right: 10px;

      a {
        margin-left: 5px;
        color: inherit;
      }
    }
  }

  .poem-body {
    p {
      line-height: 1.5em;
    }
  }
}
</style>
