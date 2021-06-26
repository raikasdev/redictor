const express = require("express")
const app = express()

const newDomain = process.env.NEW_DOMAIN;

app.get('*', (req, res) => {
  console.log(`User sent to ${newDomain}{req.url}`)
  res.redirect(`${newDomain}${req.url}`)
})

app.listen(process.env.PORT, () => {
  console.log('Started')
})