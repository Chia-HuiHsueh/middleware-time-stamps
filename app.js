const express = require('express')
const app = express()
const port = 3000
const responseTime = require('response-time')

app.use(responseTime(function (req, res, time) {
  const nowTime = new Date().getTime();
  const date = new Date(nowTime);
  console.log(`${date.toString()} | ${req.method} from ${req.originalUrl} | total time: ${time}ms`);
}))


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
