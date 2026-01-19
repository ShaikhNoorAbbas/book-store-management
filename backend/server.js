// imports
import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import mongoose from "mongoose";

//Assinging Express to an App
let app = express();

//Middleware-> JSON Parser to Get JSON Data
app.use(express.json());

// middleware to allow frontend to communicate with this backend
app.use(
  cors({
    origin: "*",
  })
);

//calling a function to connect to database
let mongodbUrl = "mongodb+srv://book:samplebook@cluster0.5htjizp.mongodb.net/";
// function to establish connection with mongoDB
async function connectdb() {
  try {
    await mongoose.connect(mongodbUrl, {
      dbName: "bookStore",
    });
    console.log(`Database Connected`);
  } catch (error) {
    console.log(`Error While Connecting to MongoDB`, error);
  }
}
connectdb();
//middleware to use routes
app.use("/books", bookRoutes);

//Assigning Port
let port = 5600;
//Starting a Server
app.listen(port, () =>
  console.log(
    `Port is Running on: ${port} \n Location is: http://localhost:${port}`
  )
);
