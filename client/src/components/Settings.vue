<template>
  <div class="settings">
    <language/>
    <dark-mode/>
  </div>
</template>

<script>
import Language from './Language.vue';
import DarkMode from "./DarkMode.vue";

export default {
  components: { 
    Language,
    DarkMode
  },
}
</script>

<style lang="scss" scoped>
.settings {
  margin-top: 5px;
  float: right;
  margin-right: 30px;
}
</style>