<template>
  <div class="container">
    <back-button class="back" @click="back" />

    <p v-if="$fetchState.pending">Loading ...</p>

    <div v-else class="main-wrapper">
      <div class="main" :style="'background: ' + poem.color">
        <FullPoem :title="poem.title" :content="poem.content" />

        <div class="info">
          <PoemDetail
            :poet-id="poem.poet_id"
            :type-id="poem.type_id"
            :era-id="poem.era_id"
            :poet="poem.poet"
            :type="poem.type"
            :era="poem.era"
            style="margin: 10px 0 25px 0"
          />

          <PoemShare :poem-id="id" style="margin-bottom: 25px" />

          <PoemOffline style="margin-bottom: 25px" />

          <PoemIssue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from '~/components/ui/BackButton.vue'
import FullPoem from '~/components/poem/FullPoem.vue'
import PoemDetail from '~/components/poem/PoemDetail.vue'
import PoemIssue from '~/components/poem/PoemIssue.vue'

export default {
  components: {
    BackButton,
    FullPoem,
    PoemDetail,
    PoemIssue,
  },
  data: () => {
    return {
      poem: null,
    }
  },
  async fetch() {
    try {
      const query = await this.$axios.get('/poems/' + this.id)

      this.poem = query.data.data
    } catch (error) {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    back() {
      if (this.$store.state.poem.poems.length > 0) {
        this.$router.back()
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  left: 20px;
  top: 90px;
}

.main-wrapper {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  .main {
    width: 870px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 auto;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;

    .info {
      background: #fff;
      padding: 15px;
      width: 345px;
    }
  }
}
</style>

<style lang="scss">
p:empty::before {
  content: ' ';
  white-space: pre;
}
</style>
