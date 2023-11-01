const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url =process.env.DB_URL;

mongoose.connect(url)
.then((result) => {
   console.log('database conected'); 
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;