const   mongoose = require("mongoose"),
        Article = require("../models/Article");

exports.GetAll = async (req, res) => {  
  try {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    var articles = []
    try {
      doc = await Article.find({}).sort('-releaseDate').limit(15).select("_id title description imageURL releaseDate likes views");
      for (var i=0;i<doc.length;i++) {
        var isLiked = false;
        if (doc[i].likes.includes(ip)) {
          isLiked = true
        }
        articles.push({
          id: doc[i].id,
          title: doc[i].title,
          description: doc[i].description,
          image_url : doc[i].imageURL,
          release_date: doc[i].releaseDate,
          like_count: doc[i].likes.length,
          views_count: doc[i].views.length,
          is_liked: isLiked
        })
      }
    }catch(err){
      console.log(err)
      return res.status(400).send({success:false, error:"data error", data:null})
    }
    
    return res.status(200).send({success:true, error:null, data:articles})
  }catch(err) {
    return res.status(400).send(null)
  }
}

exports.GetSingle = async (req, res) => {
  try {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    var id = req.params.id;
    try {
      doc = await Article.findById(id).sort('-date').select("_id title description imageURL content releaseDate likes views");
      var isLiked = false;
      if (doc.likes.includes(ip)) {
        isLiked = true
      }
      
      var article = {
        id: doc.id,
        title: doc.title,
        description: doc.description,
        content: doc.content,
        image_url: doc.imageURL,
        release_date: doc.releaseDate,
        like_count: doc.likes.length,
        views_count: doc.views.length + 1,
        is_liked: isLiked
      }
    }catch(err){
      return res.status(400).send({success:false, error:"data error", data:null})
    }
    
    res.status(200).send({success:true, error:null, data:article})
    
    if (doc.views.includes(ip)) {
      return 
    }else{
      doc.views.push(ip);
      await doc.save();
      return
    }
  }catch(err) {
    return res.status(400).send(null); 
  }
}

exports.New = async (req, res) => {
  try {
    var body = req.body;  
    console.log(body)
    var title = body.title,
        description = body.description,
        content = body.content,
        image_url= body.image_url;
    
    var now = Date.now();

    var newArticle = Article({
      title,
      description,
      content,
      imageURL: image_url,
      createdDate: now,
      releaseDate: now
    });

    try{
      doc = await newArticle.save();
    }catch(err) {
      console.log(err)
      return res.status(400).send({success:false, error:"data error", data:null})
    }
      
    return res.status(201).send({success:true, err:null, data:doc});
  }catch(err) {
    return res.status(400).send(null)
  }
}

exports.Like = async (req, res) => {
  try {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    var id = req.params.id;
    var doc = await Article.findById(id);
    if (doc.likes.includes(ip)) {
      const index = doc.likes.indexOf(ip);
      doc.likes.splice(index, 1);
      await doc.save();
      return res.status(200).send({success:true, is_liked:false, like_count: doc.likes.length});
    }else {
      doc.likes.push(ip);
      await doc.save();
      return res.status(200).send({success:true, is_liked:true, like_count: doc.likes.length});
    }
  }catch {
    return res.status(400).send(null)
  }
} 