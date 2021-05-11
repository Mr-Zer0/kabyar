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
      fill="currentColor"
      d="M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z"
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
