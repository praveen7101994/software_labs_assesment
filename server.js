const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const CORS = require('cors');
const app = express();
app.use(express.static('public'))

app.use(CORS());

app.use(bodyParser.urlencoded({ extended: false }))
// Body parser

// Connect database
connectDB();

app.get('/', (req, res) => res.send(index.html));

app.use('/api/employee', require('./routes/api/employee'))



const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));