import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../../server/routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes from your existing app
registerRoutes(app).then(() => {
  console.log('Routes registered');
});

// Handle errors
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export the serverless function
export const handler = serverless(app); 