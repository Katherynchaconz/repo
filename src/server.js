// src/server.js
const express = require('express');
const cors = require('cors');
const sum = require('./sum');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  const result = sum(a, b);
  res.json({ result });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
