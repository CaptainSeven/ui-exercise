<template>
  <q-page class="flex flex-center">
    <div class="preview q-mx-xl q-mb-xl q-mt-md q-pa-xl">
      <div class="q-ma-xl q-px-xl">
        <div class="row flex flex-center">
          <q-img
            :alt="`gift ${ giftPreview }`"
            :src="gifts[giftPreview]"
            style="width: 100%; height: 100%"
          ></q-img>
        </div>
        <div class="row">
          <h4 class="q-mb-md">{{ groupGiftNamePreview }}</h4>
        </div>
        <div class="row">
          <h6 class="q-my-md">From: {{ userNamePreview }}</h6>
        </div>
        <div class="row flex flex-center">
          <h5>Group Gift Goal</h5>
        </div>
        <div class="row flex flex-center">
          <h2 class="q-mt-none">${{giftValuePreview}}</h2>
        </div>
        <div v-if="!launched">
          <q-btn class="row full-width q-ma-sm" no-caps to="/">Back</q-btn>
          <q-btn class="row full-width q-ma-sm" color="primary" dense no-caps @click="launchGift">Launch Group Gift</q-btn>
        </div>
        <div v-else class="row flex flex-center">
          <h4 class="col-12 flex flex-center" style="color: #66bb6a">Success!</h4>
          <p class="col-12 flex flex-center">Your group gift has successfully launched.</p>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import {defineComponent} from "vue";
import giftLinks from 'src/data/data.json'

export default defineComponent({
  name: 'PageGiftPreview',
  data () {
    return {
      gifts: giftLinks.gifts,
      giftPreview: null,
      groupGiftNamePreview: null,
      userNamePreview: null,
      giftValuePreview: null,
      launched: false
    }
  },
  created () {
    this.giftPreview = this.$store.state.example.gift
    this.groupGiftNamePreview = this.$store.state.example.groupGiftName
    this.userNamePreview = this.$store.state.example.userName
    this.giftValuePreview = this.$store.state.example.giftValue
  },
  methods: {
    launchGift () {
      this.launched = true
    }
  }
})
</script>
<style lang="scss" scoped>
.preview{
  background-color: $bg-secondary;
  height: 100%;
  width: 100vw;
}
</style>
