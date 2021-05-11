<template>
  <section class="share">
    <h3>မျှဝေရန်</h3>
    <div class="share-items">
      <span>
        <a class="link" href="#">
          <FacebookIcon :width="36" :height="36" color="#3A5794" />
        </a>
      </span>
      <span>
        <a class="link" href="#">
          <TwitterIcon :width="36" :height="36" color="#1D9CEB" />
        </a>
      </span>
      <span>
        <a class="link" href="#">
          <WhatsappIcon :width="36" :height="36" color="#4FCE5D" />
        </a>
      </span>
      <span>
        <a class="link" href="#">
          <LinkIcon :width="36" :height="36" />
        </a>
      </span>
    </div>
  </section>
</template>

<script>
import FacebookIcon from '~/components/ui/icons/FacebookIcon.vue'
import TwitterIcon from '~/components/ui/icons/TwitterIcon.vue'
import WhatsappIcon from '~/components/ui/icons/WhatsappIcon.vue'
import LinkIcon from '~/components/ui/icons/LinkIcon.vue'

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkIcon,
  },
}
</script>

<style lang="scss" scoped>
.share-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
