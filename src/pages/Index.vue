<template>
  <q-page class="flex flex-center">
    <div class="landing q-mx-xl q-mb-xl q-mt-md q-pa-md">
      <h4 class="q-ma-md">
        Start a Group Gift
      </h4>
      <div class="row">
        <div class="col-6">
          <div class="row q-pa-sm">
            <span class="col-6" v-for="(item, index) in giftsObjArray" :key="item">
              <gift-item-component
                :index="index"
                :gift="item"
                :active-gift-item="activeArr[index]"
                @set-gift-active="updateActiveGift"
                loading="eager"
              ></gift-item-component>
            </span>
          </div>
        </div>
        <div class="col-6">
          <gift-form-component @continue-gift="setGift"></gift-form-component>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import giftLinks from 'src/data/data.json'
import GiftItemComponent from "components/GiftItem.vue";
import GiftFormComponent from "components/GiftForm.vue";

export default defineComponent({
  name: 'PageIndex',
  components: {GiftFormComponent, GiftItemComponent},
  setup () {
    const gifts = (giftLinks.gifts)
    const giftsObjArray = gifts.map( x => {
      let obj = {
        url: x,
      }
      return obj
    });

    return {
      giftsObjArray
    }
  },
  data () {
    return {
      activeGift: null,
      activeArr: []
    }
  },
  created () {
    for ( let x = 0; x < this.giftsObjArray.length; x++){
      this.activeArr.push(false)
    }
    if (this.$store.state.example.gift != null){
      this.activeGift = this.$store.state.example.gift
      this.activeArr[this.activeGift] = true
    }
  },
  methods: {
    updateActiveGift (data) {
      if (this.activeGift != null) {
        this.activeArr[this.activeGift] = false
      }
      this.activeArr[data] = true
      this.activeGift = data;
    },
    setGift () {
      this.$store.commit('example/setGift', this.activeGift)
      this.$router.push('/preview')
    }
  }
})
</script>
<style lang="scss" scoped>
.landing{
  background-color: $bg-secondary;
  height: 100vh;
  width: 100vw;
}
</style>
