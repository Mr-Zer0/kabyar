<template>
  <div id="app-bottom-bar" :class="{ 'hidden-navbar': !showNavbar }">
    <nav id="bottom-navigation">
      <li v-for="(item, index) in navigation" :key="index">
        <a :href="item.link">
          <SvgIcon type="mdi" :path="item.icon" :size="32" />
        </a>
      </li>
    </nav>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiHome,
  mdiMagnify,
  mdiTag,
  mdiViewDashboard
} from '@mdi/js'

export default {
  name: 'BottomBar',
  components: {
    SvgIcon
  },
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      navigation: [
        {
          link: '/',
          title: 'Home',
          icon: mdiHome
        },
        {
          link: '/',
          title: 'Search',
          icon: mdiMagnify
        },
        {
          link: '/',
          title: 'Type',
          icon: mdiTag
        },
        {
          link: '/',
          title: 'Era',
          icon: mdiViewDashboard
        }
      ]
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  methods: {
    onScroll () {
      const OFFSET = 60

      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>

<style scoped lang='scss'>
#app-bottom-bar {
  z-index: 3;
  margin: 0 auto;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  transition: bottom 300ms ease-in-out 0s, opacity 300ms ease-in-out 0s, height 300ms ease-in-out 0s;

  #bottom-navigation {
    background-color: #ffffff;
    height: 60px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    border-radius: 7px;
    width: 264px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;

      flex: 1 1 auto;
      justify-content: center;
      align-items: center;
      text-align: center;

      a {
        display: inline-flex;
        color: grey;
      }
    }
  }
}

.hidden-navbar {
  transition: bottom 300ms ease-in-out 0s, opacity 300ms ease-in-out 0s;

  bottom: -60px !important;
  opacity: 0;
}
</style>
