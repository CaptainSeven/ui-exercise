<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>
<style lang="scss" scoped>
body{
  background-color: $bg-primary;
}
</style>
