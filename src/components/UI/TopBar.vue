<template>
  <section id="app-top-bar">
    <div class="app-title">
      <h3>ကဗျာ</h3>
    </div>

    <nav class="app-nav">
      <li><a href="#">Poets</a></li>
      <li><a href="#">Types</a></li>
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
#app-top-bar {
  height: 60px;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>
