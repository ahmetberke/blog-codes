const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const ArticleSchema = Schema({
  title : {
    type : String,
    required : true
  },
  imageURL : {
    type: String,
    required: true
  },
  description : {
    type : String,
    required : true
  },
  content : {
    type : String,
    required : true
  },
  releaseDate : {
    type : Number,
    required : true
  },
  createdDate : {
    type : Number,
    required : true
  },
  isPublished : {
    type : Boolean,
    default : true
  },
  likes : {
    type : Array,
    default : []
  },
  views : {
    type : Array,
    default : []
  },
  readingNow : {
    type : Array,
    default : []
  }
})

const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;