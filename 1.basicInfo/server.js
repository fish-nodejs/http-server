const http = require('http')

const server = http.createServer((req, res) => {
  let info = {
    method: req.method,
    url: req.url,
    httpVersion: req.httpVersion,
    headers: req.headers,
  }
  res.write(JSON.stringify(info))
  res.end()
})

server.listen(8080, () => {
  console.log('listening 8080')
})