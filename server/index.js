const fs = require('fs')
const path = require('path')
const spdy = require('spdy')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const apiMiddleware = require('./api')

const app = express()

app.use(cors())
// Ensure secure
app.all('*', (req, res, next) => {
  if (req.secure) return next()
  res.redirect(
    `https://${req.hostname}:${process.env.PORT_HTTPS || 3443}${req.url}`
  )
})

// Setup body parsing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

apiMiddleware(app)

app.use(compression({ threshold: 0 }))

const https = spdy.createServer(
  {
    requestCert: false,
    rejectUnauthorized: false,
    key: fs.readFileSync(path.resolve(__dirname, './certificate/key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './certificate/cert.pem'))
  },
  app
)

https.listen(process.env.PORT_HTTPS || 3443, error => {
  if (error) {
    console.error(error)
    return process.exit(1)
  }
  return console.log(
    `App running in HTTPS on port: ${process.env.PORT_HTTPS || 3443}.`
  )
})

app.listen(process.env.PORT || 8081, error => {
  if (error) {
    console.error(error)
    return process.exit(1)
  }
  return console.log(
    `App running in HTTP on port: ${process.env.PORT || 8081}.`
  )
})
