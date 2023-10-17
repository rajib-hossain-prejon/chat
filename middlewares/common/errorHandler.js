const createError = require('http-errors');

//404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, 'Your requested content was not found!'));
}

//default error hanler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === 'development' ? err : { messsage: err.messsage };

  res.status(err.status || 500);

  if (res.locals.html) {
    res.render('error', {
      title: 'Error Html',
    });
  } else {
    //json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
