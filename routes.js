const express = require('express');
const router = express.Router();

const { parsers } = require('./db.json');

router.route('/')
  .get((req,res)=>{
      res.json({parsers:parsers});
  })
  .post((req,res)=>{
    const { parser,version } = req.body;
    parsers.push({
      _id: parsers.length+1,
      parser : parser,
      version : version
    });
    res.json({
      'success':true,
      'msg':'parser insertado'
    });

  });

module.exports = router;
