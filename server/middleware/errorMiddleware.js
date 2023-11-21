const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.message == "CastError" && err.kind == "ObjectId") {
    message = "Resource not found";
    statusCode = 400;
  }
  res.status(statusCode).sjson({
    message,
    stack: process.env.NODE_ENV == "production" ? "🎂" : err.stack,
  });
};

//REVISAR NUEVAMENTE

export { notFound, errorHandler };
