<template>
  <section class="detail">
    <div class="poet">
      <span>
        <AccountIcon :width="19" :height="19" />
      </span>

      <span>
        <span v-if="poetId === ''" class="link" v-text="poet" />
        <NuxtLink v-else :to="'/poet/' + poetId" class="link" v-text="poet" />
      </span>
    </div>
    <div class="type">
      <span>
        <LabelIcon :width="19" :height="19" />
      </span>
      <span>
        <span v-if="typeId === ''" class="link" v-text="type" />
        <NuxtLink v-else :to="'/type/' + typeId" class="link" v-text="type" />
      </span>
    </div>
    <div class="era">
      <span>
        <CalendarIcon :width="19" :height="19" />
      </span>
      <span>
        <span v-if="eraId === ''" class="link" v-text="era" />
        <NuxtLink v-else :to="'/era/' + eraId" class="link" v-text="era" />
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
    poetId: {
      type: String,
      default: '',
    },
    typeId: {
      type: String,
      default: '',
    },
    eraId: {
      type: String,
      default: '',
    },
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
    padding-top: 5px;
    padding-bottom: 5px;

    span {
      display: inherit;
      padding: 0 2px;

      a.link {
        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>
