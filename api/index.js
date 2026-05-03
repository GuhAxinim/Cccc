import express from 'express';

const app = express();
app.use(express.json());

app.post('/api/cookies', (req, res) => {
  const cookies = req.body.cookies;
  console.log('Cookies recebidos:', cookies);
  res.status(200).send('Cookies recebidos com sucesso');
});

module.exports = app;
