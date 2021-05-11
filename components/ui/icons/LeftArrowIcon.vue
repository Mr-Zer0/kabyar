<template>
  <svg
    :style="
      'width: ' +
      width +
      'px; height: ' +
      height +
      'px; color: ' +
      color +
      '; fill: currentColor'
    "
    viewBox="0 0 24 24"
  >
    <path
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      data-v-11a2f51e=""
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#3e3e3e',
    },
  },
}
</script>
