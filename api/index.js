import express from 'express';
import { registerRoutes } from '../server/routes.js';

// Create express instance
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup the routes
await registerRoutes(app);

// Error handling
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export the API handler
export default app; 