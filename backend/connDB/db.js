const mongoose = require("mongoose");
const mongoUri ="mongodb://localhost:27017/projectAuth";

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

