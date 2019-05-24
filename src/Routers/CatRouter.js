const express = require('express');
const CatRouter = express.Router();
const { cats } = require('../Data/data');

CatRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json( {cats} );
  });

CatRouter
  .route('/')
  .delete((req, res, next) => {
    cats.dequeue()
      .then(cat => {
        return res.status(200).json({ cats });
      });
  });

module.exports = CatRouter;