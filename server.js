const volleyball = require('volleyball')
const path = require('path')
const express = require('express')
const app = express()

app.use(volleyball)

app.get('/robots', (req, res, next) => {
  // console.log('HELLO IM THE SERVER')
  const robotNames = [
    'Brett', 'Finn', 'Priti',
    'Collin', 'Ben', 'YOUR_NAME_HERE'
  ]
  res.json(robotNames.map(robot => ({
    name: robot,
    imageUrl: `https://robohash.org/${robot}.svg`
  })))
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 1337
app.listen(PORT, () => {
  console.log(`Awaiting instructions on port ${PORT}`)
})
