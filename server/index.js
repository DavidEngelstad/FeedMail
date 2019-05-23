const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  console.log(req);
  res.send({ hi: 'there' });
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});
