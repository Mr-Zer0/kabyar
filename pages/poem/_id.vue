<template>
  <div class="container">
    <div class="back">
      <button @click="back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          data-v-11a2f51e=""
          data-v-70e3cf1d=""
          style="--sx: 1; --sy: 1; --r: 0deg"
        >
          <path
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
            data-v-11a2f51e=""
          />
        </svg>
      </button>
    </div>

    <p v-if="$fetchState.pending">Loading ...</p>

    <div v-else class="poem">
      <div class="heading">
        <h1>{{ poem.title }}</h1>
        <div class="info">
          <span>{{ poem.poet }}</span>
          <span>{{ poem.type }}</span>
          <span>{{ poem.era }}</span>
        </div>
        <div class="content" v-html="poem.poem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      poem: null,
    }
  },
  async fetch() {
    try {
      const query = await this.$axios.get(
        process.env.baseUrl + '/api/v1/poems/' + this.$route.params.id
      )

      this.poem = query.data.data
    } catch (error) {}
  },
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background: pink;
}

.back {
  position: fixed;
  text-align: center;
}
</style>

<style lang="scss">
p:empty::before {
  content: ' ';
  white-space: pre;
}
</style>
