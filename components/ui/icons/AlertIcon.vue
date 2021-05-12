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
      d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"
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
