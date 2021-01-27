require("dotenv").config();
const express = require("express");
const connectDB = require("../database/index");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
// const { getPhotosForRestaurant } = require("../controller/utility");
const app = express();
const PORT = process.env.PORT || 3003;

// Connect Database
connectDB();

app.use(morgan("dev"));
app.use(cors());
// app.use(
//   "/restaurants/:id/photos",
//   express.static(path.join(__dirname, "../public/dist/"))
// );

app.use(express.static(path.join(__dirname, "../public/dist")));

// app.get("/api/restaurants/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("I am the req.params", req.params);
//   getPhotosForRestaurant(id, (err, photos) => {
//     if (err) {
//       console.log("error in get /api", err);
//     }
//     res.status(200).send(JSON.stringify(photos));
//   });
// });

// app.get("/restaurants/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("in the get photos", id);
//   // console.log('path.join(__dirname', path.join(__dirname, '../public/dist'));
//   res.sendFile(path.join(__dirname, "../public/dist/index.html"));
// });

app.listen(PORT, () => {
  console.log(`server running at: ${PORT}`);
});
