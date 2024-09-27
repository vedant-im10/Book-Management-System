const express = require('express');
const app = express();
app.use(express.json());
const db = require('./database');
const bookRoutes = require('./routes/book');

db();

app.use("/book", bookRoutes);

app.listen(4000, () => {
    console.log("Server is Running"); 
});