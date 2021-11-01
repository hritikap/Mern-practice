require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const mainRouter = require('./routes');
const connectDB = require('./db/connectDB');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const mount = async () => {
  try {
    await connectDB();
    app.use('/api', mainRouter);
    const port = process.env.PORT;
    app.listen(port, () => console.log(`[server] listening in port ${port}`));
  } catch (err) {
    console.log(err.message);
  }
};

mount();
