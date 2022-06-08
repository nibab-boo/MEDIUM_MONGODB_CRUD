import express from "express";
import cors from 'cors';
import 'dotenv/config';

// changes port based on enviroment
const PORT = process.env.PORT || 1234

const app = express();
// using CORS to bypass cors blocker for frontend.
app.use(cors());






// telling server to listen at PORT.
app.listen(PORT, () => {
  console.log(`SERVER ${process.env.HAPPY} starting on ${PORT}`);
});
