const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


const port = process.env.PORT;

app.set('port', port);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
}
);

app.use('/api', require('./routes/index'));
app.use('/api/user', require('./routes/user'));

module.exports = {app};