<template>
  <div class="poet-card">
    <h1 v-text="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: '',
    },
  },
}
</script>
