const authnticationHandler = (req, res, next) => {
  if (!req.headers.api_key || req.headers.api_key !== process.env.API_KEY) {
    res.status(400);
    res.json({
      message: "Wrong API Key",
    });
  } else {
    next();
  }
};

export { authnticationHandler };
