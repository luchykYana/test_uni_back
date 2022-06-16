const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {newsRouter} = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/test_uni').then(() => {
    console.log('Mongo is connected');
});

app.use(cors({origin: _configureCors}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', newsRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
});

app.listen(5000, () => {
    console.log('App listen PORT 5000');
})

function _configureCors(origin, callback) {
    return callback(null, true);
}
