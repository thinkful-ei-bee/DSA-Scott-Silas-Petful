const express = require('express');
const DogRouter = express.Router();
const { dogs } = require('../Data/data');

DogRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json({ dogs });
  });

DogRouter
  .route('/')
  .delete((req, res) => {
    dogs.dequeue()
      .then(dog => {
        return res.status(200).json({ dogs });
      });
  });
  
module.exports = DogRouter;