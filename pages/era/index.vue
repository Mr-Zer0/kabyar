<template>
  <div class="container">
    <h1>ခေတ်တွေအကြောင်း ဖြစ်ပါတယ်။</h1>

    <p v-if="$fetchState.pending">Loading ...</p>

    <div v-else>
      <p v-for="(e, i) in eras" :key="i" v-text="e.name" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    if (this.eras.length > 0) return

    try {
      const result = await this.$axios.get('/eras/all')

      this.$store.commit('era/setEras', result.data.data)
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    eras() {
      return this.$store.state.era.eras
    },
  },
}
</script>
