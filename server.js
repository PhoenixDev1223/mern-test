const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const carRouter = require('./routes/car');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/api/car', carRouter);

const db = process.env.MONGO_URL;

mongoose.connect(db)
    .then(() => {
        console.log("MongoDB successfully connected");
    }).catch(err => console.log('DB connection Error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});