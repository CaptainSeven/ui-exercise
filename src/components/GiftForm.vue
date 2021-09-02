<template>
  <h6 class="flex flex-center q-ma-sm">Enter your gift's goal</h6>
  <q-form @submit="continueGift">
    <div class="row flex flex-center">
      <q-btn outline @click="decreaseGiftValue">-</q-btn>
      <q-input
        class="q-ma-md"
        input-class="text-center"
        outlined
        square
        v-model="giftValue"
        :rules="[val => !!val || 'Field is required']"
      ></q-input>
      <q-btn outline @click="increaseGiftValue">+</q-btn>
    </div>
    <p class="row flex flex-center">( $25 to $10,000 )</p>
    <div class="row flex flex-center">
      <q-btn class="col-3 q-ma-sm" outline dense @click="setGiftValue(100)">$100</q-btn>
      <q-btn class="col-3 q-ma-sm" outline dense @click="setGiftValue(250)">$250</q-btn>
      <q-btn class="col-3 q-ma-sm" outline dense @click="setGiftValue(500)">$500</q-btn>
      <q-btn class="col-3 q-ma-sm" outline dense @click="setGiftValue(1000)">$1,000</q-btn>
      <q-btn class="col-3 q-ma-sm" outline dense @click="setGiftValue(2500)">$2,500</q-btn>
      <q-btn class="col-3 q-ma-sm" outline dense @click="setGiftValue(5000)">$5,000</q-btn>
    </div>
    <hr class="q-ma-md">
    <p class="row q-mx-md q-my-none">Group Gift Name</p>
    <q-input class="row q-mx-md q-mb-sm" outlined square dense v-model="groupGiftName" :rules="[val => !!val || 'Field is required']"></q-input>
    <p class="row q-mx-md q-my-none">Your Name</p>
    <q-input class="row q-mx-md q-mb-sm" outlined square dense v-model="userName" :rules="[val => !!val || 'Field is required']"></q-input>
    <p class="row q-mx-md q-my-none">Your Email</p>
    <q-input class="row q-mx-md q-mb-sm" outlined square dense v-model="userEmail" :rules="[val => !!val || 'Field is required']"></q-input>
    <div class="row q-mx-md q-mt-md">
      <q-btn class="full-width" color="primary" dense type="submit">Continue</q-btn>
    </div>
  </q-form>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'GiftFormComponent',
  emits: ['continueGift'],
  data () {
    return{
      giftValue: 25,
      groupGiftName: '',
      userName: '',
      userEmail: ''
    }
  },
  created() {
    if (this.$store.state.example.giftValue != null) {
      this.giftValue = this.$store.state.example.giftValue
      this.groupGiftName = this.$store.state.example.groupGiftName
      this.userName = this.$store.state.example.userName
      this.userEmail = this.$store.state.example.userEmail
    }
  },
  methods: {
    decreaseGiftValue () {
      let newVal = this.giftValue - 5
      if (newVal < 25) {
        this.giftValue = 25
      } else {
        this.giftValue = newVal
      }
    },
    increaseGiftValue () {
      let newVal = this.giftValue + 5
      if (newVal > 10000) {
        this.giftValue = 10000
      } else {
        this.giftValue = newVal
      }
    },
    setGiftValue ( cash ) {
      this.giftValue = cash
    },
    continueGift () {
      this.$store.commit({
        type: 'example/setGiftValues',
        giftValue: this.giftValue,
        groupGiftName: this.groupGiftName,
        userName: this.userName,
        userEmail: this.userEmail
      })
      this.$emit('continueGift')
    }
  }
})
</script>
