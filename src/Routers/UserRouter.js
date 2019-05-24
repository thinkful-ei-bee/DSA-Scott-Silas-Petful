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

    users.enqueue({ username });
    console.log('USERROUTER USERS: ', users);
    return res.status(201).json({ users });
  });

UserRouter
  .route('/')
  .delete((req, res, next) => {
    users.dequeue();
    return res.status(200).json({ users });
  });

UserRouter
  .route('/')
  .get((req, res) => {
    return res.status(200).json({ users });
  });

module.exports = UserRouter;