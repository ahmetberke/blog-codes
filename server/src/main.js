const   Express = require("express"),
        mongoose = require("mongoose"),
        bodyParser = require("body-parser"),
        cors = require("cors");

require("dotenv").config()


const   dbConnect = require('./database/connect');
dbConnect();

const   PORT = process.env.PORT || 4000

const app = Express();

app.use(cors());

app.use(bodyParser.json());

const   articleRouter = require("./routes/Article");
app.use("/article", articleRouter);

app.listen(PORT, (err)=>{
  if(err) return console.log(err);
  console.log(`Server started on ${PORT} port`)
});