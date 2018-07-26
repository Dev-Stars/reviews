const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/dbAPI');

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/locations/:locID/reviews', (req, res) => {
  const { locID } = req.params;
  db.getById(locID, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports = {
  app,
};
