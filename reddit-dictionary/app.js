const https = require('https')
const options = {
  port: 443,
  method: 'GET'
}


options.hostname = 'reddit.com'

const req = https.request(options, res => {
  console.log(res)

  res.on('data', d => {
    console.log(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()