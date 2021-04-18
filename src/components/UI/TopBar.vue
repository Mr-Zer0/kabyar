<template>
  <section id="app-top-bar">
    <div class="app-title">
      <a href="#">
        <h3>ကဗျာ</h3>
      </a>
    </div>

    <div class="app-search">
      <input type="text" name="search">
    </div>

    <nav class="app-nav">
      <li><a href="#">ကဗျာဆရာ</a></li>
      <li><a href="#">အမျိုးအစား</a></li>
      <li><a href="#">Others</a></li>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/_variables.scss';

#app-top-bar {
  @media (max-width: $sm) {
    display: none !important;
  }

  height: 60px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgb(0 0 0 / 10%) 0px 8px 8px -8px;

  background: #ffffff;

  .app-title {
    a {
      h3 {
        height: 45px;
        width: 68px;
        background-image: url('~@/assets/Logo.png');
        text-indent: -999px;
      }
    }
  }

  .app-nav {
    list-style: none;

    display: flex;
    flex-direction: row;

    li {

      a {
        padding: 10px;
      }
    }
  }
}
</style>
