const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

var indexRouter = require('./routes/index');

// Set view engine to hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the profile page
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;