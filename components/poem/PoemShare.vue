<template>
  <section class="share">
    <h3>မျှဝေရန်</h3>
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

      <a href="#">
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
