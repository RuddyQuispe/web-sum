const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('PORT', 5000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/sum_web', (req, res) => {
    res.json({ value: "hello world" });
});

app.post('/sum_web', (req, res) => {
    const { first_value, second_value } = req.body;
    let value1 = parseFloat(first_value);
    let value2 = parseFloat(second_value);
    console.table({ value1, value2 });
    if (typeof value1 === "number" && typeof value2 === "number") {
        res.status(200).json({ result: `${value1 + value2}` });
    } else {
        res.status(200).json({ result: "undefined value" });
    }
});

app.listen(app.get('PORT'), (err) => {
    if (!err) {
        console.log(`Server started on port ${app.get('PORT')}`);
    } else {
        console.log("we have an error");
    }
});