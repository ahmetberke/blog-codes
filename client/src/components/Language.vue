<template>
  <div class="language">
    <img @click="setLang(l)" :class="{selected:Boolean(language == l)}" class="flag" v-for="l in languages" :key="l" :src="getIcon(l)" alt="">
  </div>
</template>

<script>
export default {
  computed : {
    languages() {
      return this.$store.state.languages
    },
    language() {
      return this.$store.state.language
    }
  },
  methods : {
    getIcon : function(v) {
      var images = require.context('../assets/icons', false, /\.png$/)
      return images('./' + v + ".png")
    },

    setLang: function(v) {
      this.$store.commit("setLanguage", {language: v})
    }
  }
}
</script>

<style lang="scss" scoped>
.language {
  margin-right: 15px;
  float: left;
  img {
    user-select: none;
    cursor: pointer;
    margin-right: 5px;
    width: 25px;
    opacity: 0.5;
  }

  .selected {
    opacity: 1;
  }
}
</style>