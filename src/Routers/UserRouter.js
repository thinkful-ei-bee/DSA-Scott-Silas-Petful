const express = require('express');
const UserRouter = express.Router();
const { users } = require('../Data/data');
const bodyParser = express.json();

UserRouter
  .route('/:username')
  .post(bodyParser, (req, res, next) => {
    const username = req.params.username;

    if (!username) {
      return res.status(400).json({ error: 'No username is request params' });
    }

    users.enqueue({ username })
      .then(() => {
        return res.status(201).json({ users });
      });
  });

UserRouter
  .route('/')
  .delete((req, res, next) => {
    users.dequeue()
      .then(user => {
        return res.status(200).json({ users });
      });
  });

module.exports = UserRouter;