<template>
  <div class="container">
    <button @click="$emit('click')">
      <LeftArrowIcon />
    </button>
  </div>
</template>

<script>
import LeftArrowIcon from './icons/LeftArrowIcon.vue'

export default {
  components: { LeftArrowIcon },
}
</script>

<style lang="scss" scoped>
.container {
  button {
    padding: 10px;
    border-radius: 25px;
    line-height: 0;
    background: #fff;
    border: none;

    &:hover {
      background: #eee;
      cursor: pointer;
    }
  }
}
</style>
