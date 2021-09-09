<template>
  <div class="blog">
    <loading v-if="loading"/>
    <div v-if="!loading" class="area">
      <div v-for="(a, i) in articles" :key="a.id" class="preArt">
        <div @click="goArticle(a.id)" class="banner">
          <!--
          <div class="badges">
            <div v-for="b in a.badges" :key="b.name.tr" :style="{background:b.bgColor, color:b.txtColor}" class="badge">{{b.name[lang]}}</div>
          </div>
          -->
          <img :src="a.image_url" alt="">
        </div>
        <div class="details">
          <div class="title">
            <h4>{{a.title}}</h4>
          </div>
          <div class="releaseDate">
            <span>{{formatDate(a.release_date)}}</span>
          </div>
          <div class="description">
            <p>{{a.description.restrict(140)}}</p>
          </div>  
        </div>
        <div class="other">
          <div class="actions">
            <i @click="like({id: a.id, index:i})" class="fa-heart" :class="{fas:a.is_liked, far:!a.is_liked}"></i>
          </div>
          <div @click="goArticle(a.id)" class="more">
            {{moreTexts[lang]}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import Axios from "axios";

String.prototype.restrict = function(char) {
  console.log(this)
  if (this.length <= char) return this;
  return this.slice(0,char) + "..."
}

export default {
  components : {
    Loading
  },
  data() {
    return {
      articles: [],
      moreTexts: {tr:"daha fazla", en:"continue"}
    }
  },
  computed : {
    loading() {
      return this.$store.state.loading
    },
    lang() {
      return this.$store.state.language
    }
  },
  created() {
    this.$store.commit("setProfile", {profile:false});
    this.$store.commit("setMenu", {menu:true});
    this.$store.commit("setLoading", {loading:true})
    this.$store.commit("setLoadBar", {loadbar:false});
    
    Axios.get("https://mysterious-citadel-97694.herokuapp.com/article")
      .then(res => {
        return res.data.data
      })
      .then(articles => {
        this.articles = articles
        this.$store.commit("setLoading", {loading:false});
      })
    
},
  methods: {
    goArticle : function(v) {
      this.$router.push(`/blog/${v}`)
    },
    formatDate: function(v) {
      var monthNames = {
        tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      }

      var dayNames = {
        tr:  ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        en:  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
      
      var date = new Date(v)
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      var dayIndex = date.getDay();
      return `${day} ${monthNames[this.lang][monthIndex]} ${year}, ${dayNames[this.lang][dayIndex]}`;
      
    },
    like:  function(v) {       
      Axios.get(`https://mysterious-citadel-97694.herokuapp.com/article/${v.id}/like`)
        .then(res => {
          return res.data
        })
        .then(data => {
          console.log(data);
          if (data.success) {
            console.log(v.index)
            console.log(this.articles[v.index])
            this.articles[v.index].is_liked = data.is_liked;
          }
        })
    },
  }
}
</script>

<style lang="scss" scoped>
.blog {
  margin-top: 30px;
  width: 100%;
  .area {
    margin-bottom: 100px;
    height: auto;
    margin-left: 1%;
    width: 98%;
    display: inline-block;
    @media screen and (max-width:500px) {
      width:100%;
      margin-left: 0%;
    }

    @media screen and (min-width:500px) and (max-width:800px) {
      width:100%;
      margin-left: 0%;
    }
    .preArt {
      border-radius: 10px;
      margin-top: 20px;
      float: left;
      width: 24%;
      background: $selected-light;
      margin-left: 0.8%;

      @media screen and (max-width:500px) {
        width:90%;
        margin-left: 5%;
      }

      @media screen and (min-width:500px) and (max-width:800px) {
        width:40%;
        margin-left: 6%;
      }

      @media screen and (min-width:800px) and (max-width:1300px) {
        width:30%;
        margin-left: 2.5%;
      }


      .banner {
        cursor: pointer;
        width: 100%;
        height: 120px;
        overflow: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        img {
          transition: transform .5s ease;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 100%;
          height: 120px;
          object-fit: cover;

          &:hover {
            transform: scale(1.5);
          }
        }

        .badges {
          position: absolute;
          margin-top: 5px;
          margin-left: 5px;
          .badge {
            margin-right: 5px;
            float: left;
            border-radius: 5px;
            padding: 5px;
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
          }
        }
      }

      .details {
        width: 90%;
        height: 180px;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 20px;
        
        @media screen and (max-width:500px) {
          width: 90%;
          padding: 5%;
          padding-top: 20px;
          height: auto;
        }

        @media screen and (min-width:500px) and (max-width:700px) {
          width: 90%;
          padding: 5%;
          height: 220px;
        }

        @media screen and (min-width:700px) and (max-width:1300px) {
          height: 200px;
          width: 90%;
          padding: 5%;
        }

        .title {
          width: 90%;
          height: auto;
          letter-spacing: 0.2px;
          h4 {
            font-weight: 500;
            text-transform: uppercase;
            margin-top: 0px;
            margin-bottom: 10px;
          }
        }
        

        .releaseDate {
          span{
            font-size: 12px;
            opacity: 0.8;
            font-weight: 500;
          }
        }

        .description {
          width: 90%;
          height: 80px;
          opacity: 0.7;
          p {
            font-weight: 300;
            word-break: keep-all;
            font-size: 12px;
          }
        }
      }

      .other {
        margin-bottom: 30px;
        .actions {
          padding-top:10px;
          float: left;
          padding-left: 8px;
          i {
            padding-left: 10px;
            font-size: 20px;

          }
        }

        margin-top: 10px;
        width: 100%;
        height: 20px;

        .more {
          cursor: pointer;
          float: right;
          padding: 8px;
          display: inline;
          border-radius: 5px;
          margin-right: 10px;
          background: $border-light;
          font-size: 10px;
          text-transform: uppercase;
          font-weight:600;
          &:hover {
            background: $yellow !important;
            color: $dark;
            transition: background 0.5s;
          }
        }
      }
    }
  }
}
</style>