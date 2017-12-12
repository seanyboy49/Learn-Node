const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const sean = {name: "sean", age: 24, cool: true}
  // res.send('Hey! It works!');
  // res.json(sean)
  res.render('hello')
});

router.get('/reverse/:name', (req,res)=> {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse)
})

module.exports = router;
