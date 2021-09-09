<template>
  <div class="article">
    <loading v-if="loading" />
    <div v-else class="loadControll">
      <div class="header">
        <img :src="article.image_url" alt="">
        <div @click="goBack" class="back">
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
      <div class="content">
        <div class="title">
          {{article.title}}
        </div>
        <div class="actions">
          <div class="statistics">
            <div class="like stat">
              <i @click="like" class="fa-heart" :class="{fas:article.is_liked, far:!article.is_liked}"></i>
              <div class="count">{{article.like_count}}</div>
            </div>
            <div class="readingTime stat">
              <i class="far fa-clock"></i>
              <div class="count">{{min}}{{minText[lang]}}</div>
            </div>
            <div class="views stat">
              <i class="fa fa-eye"></i>
              <div class="count">{{article.views_count}}</div>
            </div>
          </div>
          <div class="releaseDate">
            {{formatDate(article.release_date)}}
          </div>
        </div>
        <md-content :content="article.content"/>
      </div>
    </div>
  </div>
</template>

<script>
import MdContent from '../components/MdContent.vue';
import Loading from '../components/Loading.vue';
import Axios from 'axios';

export default {
  components : {
    MdContent,
    Loading
  },
  data() {
    return {
      article : {},
      minText: {
        tr: "dk",
        en: "min"
      },
      min: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.$store.commit("setProfile", {profile:false});
    this.$store.commit("setMenu", {menu:false});
    this.$store.commit("setLoadBar", {loadbar:true});
    this.$store.commit("setLoading", {loading:true});
        
    Axios.get(`https://mysterious-citadel-97694.herokuapp.com/article/${this.id}`)
      .then(res => {
        return res.data.data
      })
      .then(article => {
        this.article = article
        
        this.min = Math.floor(article.content.split(" ").length / 200);
        this.$store.commit("setLoading", {loading:false});
      })
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.onScroll);
  },
  computed : {
    id(){
      return this.$route.params.id;
    },
    lang() {
      return this.$store.state.language;
    },
    loading() {
      return this.$store.state.loading
    }
  },
  created () {

  },
  methods : {
    like:  function() {       
      Axios.get(`https://mysterious-citadel-97694.herokuapp.com/article/${this.id}/like`)
        .then(res => {
          return res.data
        })
        .then(data => {
          console.log(data);
          if (data.success) {
            this.article.is_liked = data.is_liked;
            this.article.like_count = data.like_count
          }
        })
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
    goBack: function() {
      this.$router.push("/blog")
    }
  },
}
</script>

<style lang="scss" scoped>
.article {
  padding-bottom: 100px;
  .header {
    position: relative;
  
    img {
      object-fit: cover;
      width: 100%;
      height: 250px;
    }
    
   
    .back {
      cursor: pointer;
      margin-left: 20px;
      margin-top: -240px;
      position: absolute;
      padding: 15px;
      border-radius: 100%;
      background: $op-dark;
      i {
        font-size: 20px;
        color: $border-light;
      }
    }
  }
  
  .content {
    width: 60%;
    margin:0 auto;
    @media screen and (max-width:800px) {
      width: 98%;
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      padding: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
      border-left:solid 2px $yellow;
      text-transform: uppercase;
    }
    
    .actions {
      display: inline-block;
      padding-bottom: 10px;
      padding-right:1% ;
      padding-left:1%;
      width: 98%;
      .statistics {
        float: right;
        i {
          float: left;
          font-size: 20px;
        }

        .stat {
          display: inline-block;
          margin-left: 20px;
          .count {
            margin-top: 1px;
            font-size: 14px;
            font-weight: 700;
            margin-left: 6px;
            float: left;
            color: $border-dark;
            opacity: 0.8;
          }
        }
      }

      .releaseDate {
        float: left;
        font-size: 14px;
        font-weight: 700;
        color: $b-dark;
      }
    }
  }
}
</style>