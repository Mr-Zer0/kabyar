<template>
  <section class="offline">
    <h3>အော့ဖ်လိုင်း သိမ်းဆည်းရန်</h3>
    <div class="offline-items">
      <a href="#" style="margin-right: 10px">
        <DownloadIcon :width="32" :height="32" />
      </a>

      <a href="#">
        <PrinterIcon :width="32" :height="32" />
      </a>
    </div>
  </section>
</template>

<script>
import DownloadIcon from '~/components/ui/icons/DownloadIcon.vue'
import PrinterIcon from '~/components/ui/icons/PrinterIcon.vue'

export default {
  components: {
    DownloadIcon,
    PrinterIcon,
  },
}
</script>

<style lang="scss" scoped>
.offline {
  h3 {
    padding-bottom: 10px;
    color: #495057;
  }
}
.offline-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
