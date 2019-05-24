const express = require('express');
const cors = require('cors');
const CatRouter = require('./Routers/CatRouter');
const DogRouter = require('./Routers/DogRouter');
const UserRouter = require('./Routers/UserRouter');
const { PORT } = require('./config');

const app = express();
app.use(cors());

// Catch-all 404
// app.use(function (req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

app.use('/api/cats', CatRouter);
app.use('/api/dogs', DogRouter);
app.use('/api/users', UserRouter);

app.listen(PORT,()=>{
  console.log(`${PORT}`);
});

module.exports = app;