<template>
  <div class="menu">
    <div class="center">
      <div v-for="r in routers" :key="r.name" class="path">
        <router-link :class="{selectedR:Boolean(r.path == path)}" class="router" :to="r.path">{{r[language]}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
  setup () {
    const route=useRoute();
    const path = computed(() =>route.path)
    return {path}
  },
  data() {
    return {
      routers : [
        {name:"Main", path:"/", tr:"Ana Sayfa", en:"Home"},
        {name:"Blog", path:"/blog", tr:"Blog", en:"Blog"},
        {name:"About Me", path:"/about", tr:"Hakkımda", en:"About Me"}
      ]
    }
  },
  computed : {
    language() {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  padding-top: 30px;
  width: 100%;
  height: 30px;
  .center {
    display: inline-block;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    .path {
      margin: auto;
      float: left;
      .router{
        color: $dark;
        font-weight: 400;
        padding: 10px;
        padding-left: 40px;
        padding-right: 40px;
        text-decoration: none;
      }

      .selectedR {
        border-bottom:solid 1px $yellow;
        color: $b-dark ;
        font-weight: 500;
        background: $soft-light;
      }
    @media screen and (max-width:400px) {
      .router {
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    }
  }
}
</style>