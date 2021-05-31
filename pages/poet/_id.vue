<template>
  <div class="container">
    <BackButton class="back" @click="back" />
    <p v-if="$fetchState.pending">Loading ...</p>

    <div v-else class="main" :style="'background: ' + poet.color">
      <div class="main-content">
        <MainContent :title="poet.name" :content="poet.biography" />
      </div>

      <div class="info">
        <ContentShare :content-id="poet.id" />

        <ContentOffline />

        <ContentIssue />
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from '~/components/ui/BackButton.vue'
import MainContent from '~/components/content/MainContent.vue'
import ContentShare from '~/components/content/ContentShare.vue'
import ContentOffline from '~/components/content/ContentOffline.vue'
import ContentIssue from '~/components/content/ContentIssue.vue'

export default {
  components: {
    BackButton,
    MainContent,
    ContentShare,
    ContentOffline,
    ContentIssue,
  },
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
  methods: {
    back() {
      if (this.$store.state.poet.poets.length > 0) {
        this.$router.back()
      } else {
        this.$router.push('/poets')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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

  .main-content {
    max-width: 520px;
  }

  .info {
    background: #fff;
    padding: 15px;
    width: 345px;
  }
}

.back {
  position: fixed;
  left: 20px;
  top: 90px;
}
</style>
