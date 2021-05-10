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
        <div class="content">
          <p
            v-for="(content, index) in contents"
            :key="index"
            v-text="content"
          />
        </div>
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
  computed: {
    /**
     * ! SECURITY CONCERN
     * v-html can lead to xss attack
     * instead of using v-html, remove all "p" tags and loop it as String array
     */
    contents() {
      const splited = this.poem.poem.split('<p>')

      const cleared = splited.map((elem) => {
        return elem.replace('</p>', '')
      })

      return cleared
    },
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
  left: 20px;
  top: 90px;

  button {
    padding: 7px;
    border-radius: 25px;
    line-height: 0;
    background: #fff;
    border: none;
  }
}
</style>

<style lang="scss">
p:empty::before {
  content: ' ';
  white-space: pre;
}
</style>
