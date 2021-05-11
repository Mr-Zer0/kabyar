<template>
  <div class="poem">
    <h1 v-text="title" />
    <div class="content">
      <p v-for="(content, index) in contents" :key="index" v-text="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poem: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    /**
     * ! SECURITY CONCERN
     * v-html can lead to xss attack
     * instead of using v-html, remove all "p" tags and loop it as String array
     */
    contents() {
      const splited = this.poem.split('<p>')

      const cleared = splited.map((elem) => {
        return elem.replace('</p>', '')
      })

      return cleared
    },
  },
}
</script>

<style lang="scss" scoped>
.poem {
  padding: 15px;
}
</style>
