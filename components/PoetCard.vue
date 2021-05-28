<template>
  <div class="poet-card" :style="'background: ' + color">
    <h3 v-text="name" />
    <section class="detail">
      <span>
        <p>{{ counter }}</p>
      </span>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: '',
    },
    poems: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'antiquewhite',
    },
  },
  computed: {
    counter() {
      const num = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉']
      const poems = this.poems.toString()
      const counter = poems.replace(/([0-9])/g, (s, key) => {
        return num[key] || s
      })

      if (this.poems % 10 === 0 && this.poems > 10) {
        return 'အပုဒ် ' + counter
      }

      return counter + ' ပုဒ်'
    },
  },
}
</script>

<style lang="scss" scoped>
.poet-card {
  width: 240px;
  padding: 10px;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
}
</style>
