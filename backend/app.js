const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();


const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

mongoose.connect(`mongodb+srv://mandeshalaka6701:dmfJh1GXQKH58G1T@moviesystem.xyep9w5.mongodb.net/Movie?retryWrites=true&w=majority`).then(()=>{
    console.log("DATABASE CONNECTED")
  });

app.listen(3500, () => {
    console.log(`Database connected port ${3500}`);
})