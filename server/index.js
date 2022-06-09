import mongoose from 'mongoose'
import restaurantModel from './models/restaurant.model.js'
import express from "express";
import cors from 'cors';
import 'dotenv/config';

// changes port based on enviroment
const PORT = process.env.PORT || "1234";

const app = express();
app.use(cors());

// Connecting to MongoDB
const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.e6m8sua.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
mongoose.connect(url)

app.use(express.json());

// CRUD ON DOCUMENT

// Create
app.post("/api/restaurants/create", async (req, res) => {

  const restaurantReq = req.body
  try {
    const restaurant = await restaurantModel.create( restaurantReq )

    res.json({ code: "success", restaurant: restaurant });

  } catch (error) {
    console.log(error);
    res.json({ code: "error", msg: "Duplicate title" })
  }
});




// listening at PORT.
app.listen(PORT, () => {
  console.log(`SERVER ${process.env.USERNAME} starting on ${PORT}`);
});
