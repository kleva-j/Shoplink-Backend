import express from 'express';

const testRoute = express.Router();

testRoute.post('/test', (req, res) => {
  res
    .status(200)
    .json({ method: req.method, message: `I just made a ${req.method} request` });
});

export default testRoute;
