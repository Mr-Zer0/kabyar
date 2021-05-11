<template>
  <section class="download">
    <h3>အော့ဖ်လိုင်း သိမ်းဆည်းရန်</h3>
    <div class="download-items">
      <span>
        <DownloadIcon />
      </span>
    </div>
  </section>
</template>

<script>
import DownloadIcon from '~/components/ui/icons/DownloadIcon.vue'

export default {
  components: {
    DownloadIcon,
  },
}
</script>

<style lang="scss" scoped>
.download-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
