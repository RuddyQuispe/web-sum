const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('PORT', 5000);

app.use(morgan('dev'));
app.use(express.json());

app.get('/sum_web', (req, res) => {
    res.json({ value: "hello world" });
});

app.post('/sum_web', (req, res) => {
    const { first_value, second_value } = req.body;
    res.status(200).json({ result: first_value + second_value });
});

app.listen(app.get('PORT'), (err) => {
    if (!err) {
        console.log(`Server started on port ${app.get('PORT')}`);
    }
});