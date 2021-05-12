<template>
  <section class="issue">
    <h3>ပြင်ဆင်ရန်</h3>
    <div class="issue-items">
      <span style="margin-bottom: 10px">
        <IssueIcon :width="19" :height="19" />
        <a href="#">ပြင်ဆင်ရန်</a>
      </span>
      <span>
        <AlertIcon :width="19" :height="19" />
        <a href="#">ဖျက်ချရန်</a>
      </span>
    </div>
  </section>
</template>

<script>
import AlertIcon from '~/components/ui/icons/AlertIcon.vue'
import IssueIcon from '~/components/ui/icons/IssueIcon.vue'

export default {
  components: {
    AlertIcon,
    IssueIcon,
  },
}
</script>

<style lang="scss" scoped>
.issue {
  h3 {
    padding-bottom: 10px;
    color: #495057;
  }

  .issue-items {
    span {
      display: flex;
      align-items: center;

      a {
        margin-left: 10px;

        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>
