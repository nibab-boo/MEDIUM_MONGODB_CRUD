// server/models/restaurant.model.js
import mongoose from "mongoose";

// validation
const reqString = {
  type: String,
  required: true,
};

// This will the sub-document Review for our Restaurant
const Review = new mongoose.Schema(
  {
    content: reqString,
  }
);

// This is our document Restaurant
const Restaurant = new mongoose.Schema(
  {
    title: {...reqString, unique: true },
    description: reqString,
    //  Specifying the subdocument ( 1 restaurant: n reviews)
    reviews: [Review]
  },
  {
    // specifying the collection name
    collection: "restaurant-data"
  }
);

const restaurantModel = mongoose.model('RestaurantData', Restaurant);

export default {restaurantModel};

