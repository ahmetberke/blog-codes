<template>
  <div class="home">
    <div class="pre">
      <div class="profileImg">
        <div class="area">
          <img src="../../public/profile.png" alt="">
        </div>
      </div>
      <div class="des">
        <div class="title">
          AHMET BERKE <br> TUNCEL
        </div>
        <div class="con">
          "Bir Tutam İnsan, Bir Tutam Geliştirici"
        </div>
      </div>
    </div>
    <div class="links">
      <div class="routers">
        <router-link v-for="r in routers" :key="r" class="router" :to="r.path">{{r[lang]}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routers : [
        {name:"Blog", path:"/blog", tr:"Blog", en:"Blog"},
        {name:"About Me", path:"/about", tr:"Hakkımda", en:"About Me"}
      ]
    }
  },
  mounted() {
    this.$store.commit("setProfile", {profile:false});
    this.$store.commit("setMenu", {menu:false});
    this.$store.commit("setLoadBar", {loadbar:false});
  },
  computed : {
    lang() {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  width: 100%;
  .pre {
    width: 90%;
    padding: 5%;
    .profileImg {

      width: 100%;
      text-align: center;

      .area {
        display: inline-block;
        padding: 5px;
        border: solid 3px $yellow;
        border-radius:100%;
        
        img {
          height: 200px;
          border-radius:100%;
          
          @media screen and (min-width:860px) {
            height: 300px;
          }
        }
      }
      
      @media screen and (min-width:700px) {
        width: auto;
        float: left;
      }
    }
    .des {
      width: 100%;
      margin-top: 40px;
      text-align: center;
    
      @media screen and (min-width:700px) {
        text-align: initial;
        margin-left: 40px;
        width: auto;
        float: left;
      }
      
      .title {
        font-size: 30px;
        font-weight: 600;
        @media screen and (min-width:860px) {
          font-size:60px;
        }
      }

      .con {
        font-size: 20px;
        margin-top: 10px;
        opacity: 0.7;
        font-style: italic;
      }
    }
  }

  .links {
    margin-top: 80px;
    margin-bottom: 200px;
    width: 100%;
    height: 60px;
    display: inline-block;
    @media screen and (max-width:700px){
      text-align: center;
    }
    .routers {
      margin-right: 120px;
      float: right;
      @media screen and (max-width:700px){
        float: none;
        margin-right:0px ;
      }
      .router {
        font-size: 20px;
        border-radius: 60px;
        margin-right: 20px;
        background: $border-light;
        padding:20px 50px 20px 50px;
        letter-spacing: 2px;
        text-transform: uppercase;
        &:hover {
          padding:30px 60px 30px 60px;
          background: $yellow !important;
          color: $dark !important;
          transition: padding 0.5s, color 0.5s, background 0.5s;
        }
      }
      @media screen and (max-width:860px) and (min-width: 700px) {
        .router {
          font-size: 16px;
          border-radius: 50px;
          margin-right: 10px;
          background: $border-dark;
          padding:15px 40px 15px 40px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          &:hover {
            padding:20px 45px 20px 45px;
          }
        }
      }

      @media screen and (max-width:700px){
        .router {
          font-size: 16px;
          border-radius: 50px;
          margin-right: 10px;
          background: $border-dark;
          padding:10px 25px 10px 25px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          &:hover {
            padding:15px 30px 15px 30px;
          }
        }
      }
    }
  }
}

</style>