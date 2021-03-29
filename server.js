const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const testimonials = require('./routes/testimonials');
const concerts = require('./routes/concerts');
const seats = require('./routes/seats');

app.use('/api', testimonials);
app.use('/api', concerts);
app.use('/api', seats);

app.use((req, res) => {
    res.status(404).send('404 not found...');
  });

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });