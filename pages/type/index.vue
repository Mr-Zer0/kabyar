<template>
  <div class="container">
    <h1>ကဗျာအမျိုးအစားတွေအကြောင်း ဖြစ်ပါတယ်။</h1>

    <p v-if="$fetchState.pending">Loading ...</p>

    <div v-else>
      <p v-for="(e, i) in types" :key="i" v-text="e.name" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    if (this.types.length > 0) return

    try {
      const result = await this.$axios.get('/types/all')

      this.$store.commit('type/setTypes', result.data.data)
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    types() {
      return this.$store.state.type.types
    },
  },
}
</script>
