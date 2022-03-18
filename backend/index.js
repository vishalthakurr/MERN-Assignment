require("../backend/connDB/db");
const express = require('express')

const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

app.use(express.json()) // for middle ware to req for json

// avaliable routes
app.use('/api', require("../backend/routes/userAuth"))  // router file use 



app.get('/', (req, res) => {
  res.send("hello")
}
)



app.listen(port, () => {
  console.log(` Authenticate  backend listening at http://localhost:${port}`)
})

