const express = require('express')
const app = express()
const myport = 3000

const greeting=process.env.MESSAGE
//const myport=process.env.PORT_NO

app.get('/test', (req, res) => {
  res.send(greeting + ',Hello World!')
})


app.get('/', (req, res) => {
  res.send('Iam healthy')
})

app.listen(myport, () => {
  console.log(`my app listening on port ${myport}`)
})
