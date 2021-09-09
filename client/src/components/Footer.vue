<template>
  <div class="footer">
    <div class="c">
      <div class="top">
        <social-medias/>
        <settings/>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedias from "./SocialMedias.vue";
import Settings from "./Settings.vue"

export default {
  components : {
    SocialMedias,
    Settings
  },
  data() {
    return {
      open: false
    }
  },
  methods : {
    changeOpen : function() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  height: auto;
  background: $soft-light;

  .top {
    display: inline-block;
    width: 100%;
    height: auto;
  }

  .bottom {
    display: inline-block;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  .c {
    margin-left: 5%;
    margin-right: 5%;

    @media screen and (max-width:350px) {
      margin-left:0%;
      margin-right:0%;
    }
  }

  img {
    user-select: none;
    @media screen and (max-width:300px) {
      width: 20px !important;
    }
  }

  .close {
    float: left;
    img {
      margin-top: 5px;
      cursor: pointer;
      transform: rotate(270deg);
    }
  }
  .open {
    img {
      transform: rotate(90deg);
    }
  }
}

</style>