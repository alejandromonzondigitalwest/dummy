const express = require('express');
const router = express.Router();

const { parsers, mappers } = require('./db.json');

router.route('/parsers')
  .get((req,res)=>{
      res.json({'status':true,parsers:parsers});
  })
  .post((req,res)=>{
    const { PARSER,VERSION } = req.body;
    parsers.push({
      _id: parsers.length+1,
      parser : PARSER,
      version : VERSION
    });
    res.json({
      'success':true,
      'msg':'parser insertado'
    });

  });

  router.route('/mappers')
    .get((req,res)=>{
        res.json({'status':true,mappers:mappers});
    })
    .post((req,res)=>{
      const { MAPPER,VERSION } = req.body;
      mappers.push({
        _id: mappers.length+1,
        mapper : MAPPER,
        version : VERSION
      });
      res.json({
        'success':true,
        'msg':'maper insertado'
      });

    });
module.exports = router;
