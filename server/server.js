const express = require('express');
const cors = require('cors');
const path = require('path');
const postsRouter = require('./routes/postsRouter');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(
  express.static(path.resolve(__dirname, 'client', 'build', 'index.html')),
);
app.use('/api/posts', postsRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Started on port ${PORT}`));
