const router = require('express').Router()

router.get('/test', (req, res) => {
  res.send('Hello World')
})

router.post('/test', (req, res) => {

})

router.put('/test', (req, res) => {
  
})

router.delete('/test', (req, res) => {
  
})

module.exports = router