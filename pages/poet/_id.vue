<template>
  <div class="container">
    <h1>{{ poet.name }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    poet: null,
  }),

  // Server side rendering - fetching data at server
  async fetch() {
    try {
      const query = await this.$axios.get('/poets/' + this.$route.params.id)

      this.poet = query.data.data
    } catch (error) {}
  },
}
</script>
