const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connection');
const bookRouter = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api/books', bookRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
