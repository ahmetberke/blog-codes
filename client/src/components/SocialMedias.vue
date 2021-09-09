<template>
  <div class="socialMedia">
    <div class="center">
      <div v-for="sm in socialMedias" :key="sm.name"  class="icon">
        <a target="_blank" :href="sm.url">
          <i :class="sm.icon" class="ic-main-color"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMedias : [
        {name: "instagram", icon:"fab fa-instagram-square", url:"https://www.instagram.com/ahmetberke.py/"},
        {name: "github", icon:"fab fa-github-square", url:"https://www.github.com/ahmetberke"},
        {name: "twitter", icon:"fab fa-twitter-square", url:"https://www.twitter.com/abtdev"},
        {name: "mail", icon:"fas fa-envelope-square", url:"mailto:tuncel.ahmet.berke@gmail.com"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.socialMedia {
  float: left;
  margin-top: 5px;
  height: 40px;
  .center{
    width: 160px;
    margin-left: 5%;
  }
  i {
    margin-right: 10px;
    float: left;
    user-select: none;
    font-size: 30px;
  }
}

</style>