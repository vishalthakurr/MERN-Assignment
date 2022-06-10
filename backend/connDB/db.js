require("dotenv").config()

const mongoose = require("mongoose");
const mongoUri =process.env.CONNECT;

mongoose.connect(mongoUri,{
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify :false
}).then(()=>{
    console.log(" Database connection suceesful");
}).catch((e)=>{
    console.log(e);
})

