require("dotenv").config();
const express = require("express");
const connectDB = require("../database/index");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const path = require("path");
const app = express();
const config = require("../webpack.dev.config");
const compiler = webpack(config);
const DIST_DIR = path.join(__dirname, "../public/dist");

const PORT = process.env.PORT || 3003;

// Connect Database
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(DIST_DIR));

// Define Routes
app.use("/api", require("../routes/restaurant"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../public/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public", "dist", "index.html"));
//   });
// }
app.get("*", (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running at: ${PORT}`);
});
