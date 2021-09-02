<template>
  <q-layout view="hHh lpR fFf">
    <img
      alt="Alias logo"
      :src=urlLogo
      style="max-width: 20%;"
      class="q-pl-xl q-pt-xl"
    >

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import dataConfig from 'src/data/data.json'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const urlLogo = ref(dataConfig.logo)

    return {
      urlLogo
    }
  }
})
</script>
<style lang="scss">
.q-layout, .q-page-container, .q-page{
  background-color: $bg-primary;
}
</style>
