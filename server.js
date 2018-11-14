const volleyball = require('volleyball')
const express = require('express')
const app = express()

app.use(volleyball)

const PORT = 1337
app.listen(PORT, () => {
  console.log(`Awaiting instructions on port ${PORT}`)
})
