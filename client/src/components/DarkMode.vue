<template>
  <div class="DarkModeSet">
    <img @click="changeMode" v-show="darkMode" :src="getIcon('dark')">
    <img @click="changeMode" v-show="!darkMode" :src="getIcon('light')"> 
  </div>
</template>

<script>
export default {
  computed : {
    darkMode() {
      return this.$store.state.darkMode
    }
  },

  methods : {
    getIcon : function(v) {
      var images = require.context('../assets/icons', false, /\.png$/)
      return images('./' + v + ".png")
    },

    changeMode : function() {
      this.$store.commit("changeMode")
    }
  }
}
</script>

<style lang="scss" scoped>
.DarkModeSet{
  float: left;

  img {
    user-select: none;
    cursor: pointer;
    width: 25px;
  }
}
</style>