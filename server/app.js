import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

// Set up the express app
const app = express();

// Enable CORS
app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());

// Setup an index route
app.get('/', (req, res) => res.status(200).send({
  method: req.method,
  status: 'success',
  message: 'Welcome to My Xperience'
}));

// Routes
app.use('/api/v1', routes);

// Return 404 for nonexistent routes
app.use((req, res) => {
  res
    .status(404)
    .json({
      method: req.method,
      message: "Oops! What your looking for isn't here"
    });
});

// Set Port
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`App running on port ${port}`));

export default app;
