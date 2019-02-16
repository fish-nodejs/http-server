const http = require('http')

const server = http.createServer((req, res) => {
  let i = 10
  let val = setInterval(() => {
    if ( i < 0) {
      res.end()
      clearInterval(val)
    } else {
      res.write(`hello ${i}`)
      i--
    }
  }, 1000)
})

server.listen(8080, () => {
  console.log('listening 8080')
})