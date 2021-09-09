const   mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("MONGODB URL", {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    });
    mongoose.connection.on('error', console.error.bind(console, "Connection Error"));
    mongoose.connection.once('open', ()=>{
        console.log('Connect to DB');
    });
}