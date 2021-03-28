<template>
  <div class="navigation">
    <div>
      <router-link to="/">
        <SvgIcon type="mdi" :path="mdiArrowLeft" :size="24" />
      </router-link>
    </div>
    <div>
      <SvgIcon type="mdi" :path="mdiShareVariant" :size="24" />
      <SvgIcon
        type="mdi"
        :path="mdiMessageAlert"
        :size="24"
        style="margin-left: 15px;"
      />
    </div>
  </div>
  <article class="poem-content">

    <h2 class="poem-title">မြင်စိုင်းရွှေပြည်</h2>
    <div class="poem-info">
      <span>
        <SvgIcon type="mdi" :path="mdiAccount" :size="18" />
        <a href="#">ငါးစီးရှင်ကျော်စွာ</a>
      </span>
      <span>
        <SvgIcon type="mdi" :path="mdiLabel" :size="18" />
        <a href="#">ကာချင်း</a>
      </span>

    </div>
    <div class="poem-body">
      <p>တာဝတိံသာ၊ နတ်ရွာလော၊ နတ်ရွာလော။</p>
      <p>ဟုတ်တည်း ရှင်ချင်း ရှင်ချင်း။</p>
      <p>ဟုတ်တည်း ဆွေရင်း ဆွေရင်း။</p>
      <p>ဟုတ်တည်း သည်ရင်း သည်ရင်း။</p>
      <p>မြင်စိုင်းဟူသည်၊ ရွှေပြည် ရွှေပြည်။</p>
      <p>မြင်စိုင်းရွှေမြေ၊ ပန်းသင်းခွေ</p>
      <p>ပင်ခြေချုံထက်နွယ်၊ ချုံထက်နွယ်။</p>
      <p>တောင်လေရှုန်းရှုန်း၊ မိုးခတ်အုန်း။</p>
      <p>ကင်ပုန်းပွင့်ချီချယ် ပွင့်ချီချယ်။</p>
      <p>နွယ်ပန်းခွာညို၊ ပွင့်ပေလို</p>
      <p>ပြာသိုဆောင်းလလယ်၊ ဆောင်းလလယ်။</p>
      <p>တောင်ထွတ်ဖျားဆီ၊ ရွှေစာတီ။</p>
      <p>သရီရဓာတ်စွယ်၊ သရီရဓာတ်စွယ်။</p>
      <p>ယာဆီမြေကောင်း၊ ကျသည့်ပြောင်း။</p>
      <p>မနှောင်းမှည့်ဆောလွယ်၊ မှည့်ဆောလွယ်။</p>
      <p>ခါနှင့်ဘုတ်ချိုး၊ ကြက်တောမျိုး</p>
      <p>လိုစိုးကျက်မြေကျယ်၊ ကျက်မြေကျယ်။</p>
      <p>ယှဉ်ဖော်မဝေး၊ ဖော်ရွှေကျေး။</p>
      <p>စာနွှေးစားလိုဖွယ်၊ စားလိုဖွယ်။</p>
      <p>ယရည်းသွန်းသွန်း၊ မြင်းသည်ဝန်း</p>
      <p>လှံချွန်းတွန်းတက်ပယ်၊ တွန်းတက်ပယ်။</p>
      <p>စောလူးစီးတန်၊ မျိုးဆက်ဒန်</p>
      <p>လျင်ထန်မြင့်မဆွယ်၊ မြင့်မဆွယ်။</p>
      <p>မြှောက်စည်လတီး၊ ဝင်ခါနီး</p>
      <p>စောထီးနန်းထက်ကျယ်၊ နန်းထက်ကျယ်။</p>
      <p>သာသည့်မြေပြင်၊ စောနတ်ရှင်</p>
      <p>နန်းခွင်ရှုတင့်တယ်၊ ရှုတင့်တယ်။</p>
      <p>အထူးလော၊ တက်တိမ်လော၊ နေရောင်လော။</p>
    </div>

  </article>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiArrowLeft,
  mdiShareVariant,
  mdiMessageAlert,
  mdiAccount,
  mdiLabel,
  mdiCalendar
} from '@mdi/js'

export default {
  name: 'Poem',
  components: {
    SvgIcon
  },
  data () {
    return {
      mdiArrowLeft,
      mdiShareVariant,
      mdiMessageAlert,
      mdiAccount,
      mdiLabel,
      mdiCalendar
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box
}

.poem-content {
  max-width: 760px;
  padding: 15px 20px 45px 20px;
  box-sizing: border-box;
  margin: 0 auto;

  .poem-info {
    margin-bottom: 15px;
    margin-top: 5px;

    span {
      display: inline-flex;
      align-items: center;
      margin-right: 10px;

      a {
        margin-left: 5px;
        color: inherit;
      }
    }
  }

  .poem-body {
    p {
      line-height: 1.5em;
    }
  }
}
</style>
