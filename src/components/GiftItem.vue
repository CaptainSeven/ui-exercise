<template>
  <div :class="`${ giftClass } q-pa-sm q-ma-sm`">
    <q-img
      :alt="`gift ${ index }`"
      :src="gift.url"
      style="width: 100%; height: 100%"
      @click.stop="setActive"
    ></q-img>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'GiftItemComponent',
  props: {
    gift: Object,
    index: Number,
    activeGiftItem: Boolean
  },
  data () {
    return {
      giftClass: 'inactive'
    }
  },
  created() {
    if(this.activeGiftItem){
      this.giftClass = 'active'
    }
  },
  watch: {
    activeGiftItem() {
      this.giftClass = this.activeGiftItem == true ? 'active' : 'inactive'
    }
  },
  methods: {
    setActive () {
      this.$emit('setGiftActive', this.index)
    }
  }
})
</script>
<style scoped>
div.inactive {
  border: solid #eeeeee
}
div.active {
  border: solid #072C4A
}
</style>
