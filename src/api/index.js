const express = require('express')

const app = express()

function connection() {

  app.get('/', (req, res) => {
    res.send('Hello')
  })

  app.listen(3000, () => {
    console.log('Connect')
  })
}

module.exports = connection