const http = require('http')

const server = http.createServer((req, res) => {
  let s = ''
  for (let i = 0 ; i < 1000; i++) {
    s += `hello world ${i} \n`
  }
  res.write(s)
  res.end()
})

server.listen(8080, () => {
  console.log('listening 8080')
})