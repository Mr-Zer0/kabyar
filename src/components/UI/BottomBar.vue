<template>
  <div id="app-bottom-bar">

    <nav id="bottom-navigation">
      <li>
        <a href="#">
          <SvgIcon type="mdi" :path="mdiHome" size="32" />
        </a>
      </li>
      <li>
        <a href="#">
          <SvgIcon type="mdi" :path="mdiMagnify" size="32" />
        </a>
      </li>
      <li>
        <a href="#">
          <SvgIcon type="mdi" :path="mdiTag" size="32" />
        </a>
      </li>
      <li>
        <a href="#">
          <SvgIcon type="mdi" :path="mdiViewDashboard" size="32" />
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
      mdiHome,
      mdiMagnify,
      mdiTag,
      mdiViewDashboard
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
      }
    }
  }
}

// #app-bottom-bar {
//   z-index: 3;

//   border-radius: 7px;
//   box-shadow: 0 0 15px 3px rgb(0, 0, 0, 15%);
//   background: #ffffff;

//   position: fixed;
//   bottom: 10px;
//   left: 50%;
//   transform: translate(-50%, 0);
// }
// #bottom-navigation {
//   display: flex;
//   flex-wrap: wrap;

//   li {
//     list-style: none;
//     background: blue;

//     a {
//       background: pink;
//       padding: 5px 10px;
//       margin: 0;
//       display: inline-flex;
//       text-decoration: none;
//       color: inherit;
//     }
//   }
// }
</style>
