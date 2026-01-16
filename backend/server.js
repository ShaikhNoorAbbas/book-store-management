import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
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

//middleware to use routes
app.use("/books", bookRoutes);

let port = 1000;
//Starting a Server
app.listen(port, () =>
  console.log(
    `Port is Running on: ${port} \n Location is: http://localhost:${port}`
  )
);
