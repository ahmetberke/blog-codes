<template>
  <div class="about">
    <md-content :content="cont"/>
    <div class="skills">
      <div class="title">{{skillTable.title[lang]}}</div>
      <div v-for="skill in skillTable.skills" :key="skill.name" class="skill">
        <div class="name">{{skill.name}}</div>
        <div :style="{width:(skill.value * 98 / 100) + '%'}" class="value">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdContent from "../components/MdContent.vue";
import AboutMeTr from '../assets/aboutme_tr.md';
import AboutMeEn from '../assets/aboutme_en.md';

export default {
  components: {
    MdContent
  },

  computed : {
    lang() {
      return this.$store.state.language
    }
  },

  watch : {
    lang : function(v){
      if (v == "tr") {
        this.cont = AboutMeTr
      }else if (v == "en") {
        this.cont = AboutMeEn
      }else {
        this.cont = "Something's wrong"
      }
    }
  },

  data() {
    return {
      cont: "",
      skillTable: {
        title: {
          tr: "Yeteneklerim",
          en: "Skills"
        },
        skills: [
          {name:"HTML", value:40},
          {name:"CSS", value:15},
          {name:"JS", value:60},
          {name:"C++", value:5},
          {name:"GoLang", value:50},
          {name:"Python", value:53},
          {name:"Valorant", value:1}
        ]
      }
    }
  },
  created() {
    this.$store.commit("setProfile", {profile:true});
    this.$store.commit("setMenu", {menu:true});
    this.$store.commit("setLoadBar", {loadbar:true});

    if (this.$store.state.language == "tr") {
      this.cont = AboutMeTr
    }else if (this.$store.state.language == "en") {
      this.cont = AboutMeEn
    }else {
      this.cont = "Something's wrong"
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding-top: 20px;
  padding-bottom: 100px;
  width: 60%;
  margin: auto;
  .skills {
    margin-top: 30px;
    .title {
      font-size: 30px;
      font-weight:500;
      text-transform: uppercase;    
    }
    .skill {
      display: inline-block;
      font-size: 16px;
      font-weight: 300;
      margin-top: 10px;
      border-radius: 10px;
      width: 98%;
      background: $soft-light;
      .name {
        font-weight: 600;
        color:   $dark;
        padding-left: 2%;
        padding-top: 2.5px;
        height: 27.5px;
        float: left;
        width: 80px;
      }

      .value  {
        height: 30px;
        border-radius: 10px;
        background: rgb(255, 207, 51);
      }
    }
  }
}
</style>