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
// You might have got something like this. Change it like before using it.
// mongodb+srv://babin:<password>@cluster0.e6m8sua.mongodb.net/?retryWrites=true&w=majority
const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.e6m8sua.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
mongoose.connect(url)
app.use(express.json());


/* ----- CRUD ON DOCUMENT ------- */

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


// Read 
// Read all restaurants excluding their reviews
app.get("/api/restaurants", async (req, res) => {
  try {
    // Since, we donot specify the query, we get everything.
    const restaurants = await restaurantModel.find({},
      // Projections: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#definition
      // Specifying we only need need title and description. We get _id by default
      {
        title: 1,
        description: 1,
      }
    )

    res.json({ code: "success", restaurants: restaurants })
  } catch (error) {
    console.log(error);
    res.json({ code: "error" })
  }
});

// Read Only one restaurant
app.get("/api/restaurant/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // findOne gives the first Document that matches the query.
    const restaurant = await restaurantModel.findOne({
      "_id": id
    })
    if (restaurant) {
      console.log(restaurant);
      res.json({ code: "success", restaurant: restaurant });
    } else {
      res.json({ code: "error", msg: "No restaurant found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ code: "error" })
  }
})


// Update Restaurant
app.put("/api/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // Updating the Restaurant
    await restaurantModel.updateOne({
      "_id": id
    },{
      title: req.body.title,
      description: req.body.description,
    })

    // Retriving it
    const restaurant = await restaurantModel.findOne({
      "_id": id
    })
    res.json({ code: "success", restaurant: restaurant })
  } catch (error) {
    console.log(error);
    res.json({ code: "error" });
  }
})


// Delete Restaurant
app.delete("/api/restaurants/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await restaurantModel.deleteOne({
      "_id": id
    })

    if (response.acknowledged === true) {
      // You can sent back all the restaurant or, 
      // filterout Restaurants in frontend.
      res.json({ code: "success", restaurantId: id });
    } else {
      res.json({ code: "error", msg: "Access denied"});
    }
  } catch (error) {
    console.log(error);
    res.json({ code: "error" });
  }
})


















// listening at PORT.
app.listen(PORT, () => {
  console.log(`SERVER ${process.env.USERNAME} starting on ${PORT}`);
});
