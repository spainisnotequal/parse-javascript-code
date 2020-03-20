// In develpment, load environment variables (for instance, DEV_DB_URL)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Express JSON parser
app.use(express.json());

// MongoDB configuration
const mongoDB = process.env.MONGODB_URI || process.env.DEV_DB_URL;

// Connect to the database
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log("MongoDB connection error: ", error));

// Configurte port
const PORT = process.env.PORT || 5000;

// Start the server and console.log that the server is up and running
app.listen(PORT, () => console.log(`Server started (listening on port ${PORT})`));
