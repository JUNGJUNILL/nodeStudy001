var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/' , (req,res)=>{
  res.send('<h1>Hello Socket</h1>')
})

router.get('/chating' , (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})




module.exports = router;
