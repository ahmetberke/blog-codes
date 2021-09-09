<template>
  <div class="profile">
    <div class="centerArea">
      <div class="photo">
      <img src="../../public/profile.png" alt="">
    </div>
    <div class="title">
      <div class="surname">Ahmet Berke</div>
      <div class="lastname">TUNCEL</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
  }
}
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  display: inline-block;

  .centerArea {
    width: 365px;
    margin: 0 auto;
    @media screen and (max-width:$small) {
      width: 250px;
    }
    .photo {
      float: left;
      padding-top: 20px;
      width: 150px !important;
      
      @media screen and (max-width:$small) {
        width: 110px !important;
      }
      
      img {
        border-radius: 100%;
        border:solid 3px $yellow;
        padding: 3px;
        height: 140px;
        @media screen and (max-width:$small) {
          height: 80px;
        }
      }

    }

    .title {
      margin-top: 50px;
      margin-left: 20px;
      width: 190px !important;
      float: left;
      width: 100%;
      font-size: 30px;
      font-weight:700;
      color: $b-dark;
      @media screen and (max-width:$small) {
        margin-top: 35px;
        font-size: 20px;
        margin-left: 0px;
        width: 140px !important;
      }
      .lastname {
        margin-top: -10px;
        font-size: 35px;
        @media screen and (max-width:$small) {
          font-size: 25px;
        }
      }
    }
  }
}
</style>