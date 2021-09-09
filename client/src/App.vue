<template>
  <div id="app" :class="{darkMode}">
    <load-bar v-if="loadbar"/>
    <Menu v-if="menu"/>
    <profile v-if="profile"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
import LoadBar from "./components/LoadBar.vue"

export default {
  name: 'App',
  components: {
    Profile,
    LoadBar,
    Menu,
    Footer
  },
  created() {
    this.$store.commit("setProfile", {profile:true});
    this.$store.commit("setMenu", {menu:true});
    this.$store.commit("setLoadBar", {loadbar:false});
  },
  computed : {
    darkMode() {
      return this.$store.state.darkMode
    },
    page() {
      return this.$route.query
    },
    language() {
      return this.$store.state.language
    },
    profile() {
      return this.$store.state.profile
    },
    menu() {
      return this.$store.state.menu
    },
    loadbar() {
      return this.$store.state.loadbar
    }
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 0px;
  
  @media screen and (max-height:500px) {
    min-height: 500px;
  }

  @media screen and (min-height:500px) and (max-height:750px) {
    min-height: 750x;
  }

  @media screen and (min-height:750px) and (max-height:1000px) {
    min-height: 1000px;
  }

  @media screen and (min-height:1000px) and (max-height:1250px) {
    min-height: 1250px;
  }

  @media screen and (min-height:1250px) and (max-height:1500px) {
    min-height: 1500px;
  }

  @media screen and (min-height:1500px) and (max-height:1750px) {
    min-height: 1750px;
  }

  @media screen and (min-height:1750px) and (max-height:2000px) {
    min-height: 2000px;
  }

  @media screen and (min-height:2000px) and (min-height:2250px) {
    min-height: 2250px;
  }

  height: auto;
  width: 100%;
  color: $dark;
  font-family: $main-font;
}

body {
  background: $light;
}

.container {
  height: auto;
  .content {
    height: auto;
  }
}
</style>
