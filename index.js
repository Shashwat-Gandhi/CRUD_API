const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

const app = express();

const PORT = 5000;

const usersRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

app.use(bodyparser.json());
app.use(cors());

app.get('/', (req,res) => {
    console.log("[TEST]");
    res.send('Hello from server');
})

app.use('/users',usersRoutes);
app.use('/posts',postRoutes);

mongoose.connect(process.env.DB_CONNECTION, ()=> {
    console.log('connected to db');
});

app.listen(PORT, () => {
    console.log("server runnging on port " + PORT);
})