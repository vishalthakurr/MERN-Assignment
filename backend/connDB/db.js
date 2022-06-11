require("dotenv").config()

const mongoose = require("mongoose");
const mongoUri ="mongodb+srv://Vishal:VishalThakur@cluster1.oiwus.mongodb.net/MernStack?retryWrites=true&w=majority"

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

