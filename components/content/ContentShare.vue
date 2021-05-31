<template>
  <section class="share">
    <h3 v-text="title" />
    <div class="share-items">
      <a href="#">
        <FacebookIcon :width="36" :height="36" color="#3A5794" />
      </a>

      <a href="#">
        <TwitterIcon :width="36" :height="36" color="#1D9CEB" />
      </a>

      <a href="#">
        <WhatsappIcon :width="36" :height="36" color="#4FCE5D" />
      </a>

      <a :href="'https://t.me/share/url?url=' + link">
        <TelegramIcon :width="36" :height="36" />
      </a>

      <a href="#">
        <LinkIcon :width="36" :height="36" />
      </a>
    </div>
  </section>
</template>

<script>
import FacebookIcon from '~/components/ui/icons/FacebookIcon.vue'
import TwitterIcon from '~/components/ui/icons/TwitterIcon.vue'
import WhatsappIcon from '~/components/ui/icons/WhatsappIcon.vue'
import LinkIcon from '~/components/ui/icons/LinkIcon.vue'
import TelegramIcon from '~/components/ui/icons/TelegramIcon.vue'

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkIcon,
    TelegramIcon,
  },
  props: {
    title: {
      type: String,
      default: 'မျှဝေရန်',
    },
    contentId: {
      type: String,
      required: true,
    },
  },
  computed: {
    link() {
      return process.env.baseUrl + '/poem/' + this.contentId
    },
  },
}
</script>

<style lang="scss" scoped>
.share {
  h3 {
    padding-bottom: 10px;
    color: #495057;
  }

  .share-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a {
      margin-right: 10px;
    }
  }
}
</style>
