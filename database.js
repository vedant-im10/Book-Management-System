const mongoose = require('mongoose');

const db = async () => {
     try {
        await mongoose.connect("mongodb://127.0.0.1:27017/PDEUBook", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        });

        console.log("Database Connected");
    } catch (e) {
        console.log(e);
    }
}

module.exports = db;
