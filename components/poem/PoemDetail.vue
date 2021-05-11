<template>
  <section class="detail">
    <div class="poet">
      <span>
        <AccountIcon :width="19" :height="19" />
      </span>
      <span>
        <a class="link" href="#" v-text="poet" />
      </span>
    </div>
    <div class="type">
      <span>
        <LabelIcon :width="19" :height="19" />
      </span>
      <span>
        <a class="link" href="#" v-text="type" />
      </span>
    </div>
    <div class="era">
      <span>
        <CalendarIcon :width="19" :height="19" />
      </span>
      <span>
        <a class="link" href="#" v-text="era" />
      </span>
    </div>
  </section>
</template>

<script>
import AccountIcon from '@@/components/ui/icons/AccountIcon.vue'
import LabelIcon from '@@/components/ui/icons/LabelIcon.vue'
import CalendarIcon from '@@/components/ui/icons/CalendarIcon.vue'

export default {
  components: {
    AccountIcon,
    LabelIcon,
    CalendarIcon,
  },
  props: {
    poet: {
      type: String,
      default: 'အမည်မသိရှေးစာဆို',
    },
    type: {
      type: String,
      default: '',
    },
    era: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .poet,
  .type {
    margin-right: 10px;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    span {
      display: inherit;
      padding: 0 2px;

      .link {
        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>
