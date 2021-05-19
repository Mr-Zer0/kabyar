<template>
  <div class="container">
    <h1>Heyyyy.... I am poet detail page</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    poet: null,
  }),
  async fetch() {
    try {
      const query = await this.$axios.get(
        process.env.baseUrl + '/api/v1/poems/' + this.$route.params.id
      )

      this.poem = query.data.data
    } catch (error) {}
  },
}
</script>
