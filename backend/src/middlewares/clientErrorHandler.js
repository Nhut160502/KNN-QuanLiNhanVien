const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(400).send({ error: "Something failed!" });
  } else {
    next(err);
  }
};

export default clientErrorHandler;
