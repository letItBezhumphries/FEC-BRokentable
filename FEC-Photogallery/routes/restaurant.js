const express = require("express");
const { isString } = require("lodash");
const router = express.Router();
const PhotoGallery = require("../database/restaurantModel");

router.get("/", (req, res) => {
  res.json({ route: "in the api route" });
});

// @route    GET api/restaurants
// @desc     Get restaurants list
// @access   Public
router.get("/restaurants", async (req, res) => {
  try {
    // const restaurants = await PhotoGallery.find();
    // if (!restaurants) {
    //   return res.status(500).json({ msg: "Server error." });
    // }
    // console.log(restaurants.data);
    const count = await Photogallery.countDocuments({}, (err, total) => {
      if (err) {
        console.log("error", err);
      }
      console.log("this is the total:", total);
    });
    console.log("THE count", count);
    res.json(count);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error." });
  }
});

// @route    GET api/restaurant/:name
// @desc     Get photogallery images for restaurant by name
// @access   Public
router.get("/restaurant/:name", async (req, res) => {
  const restaurantName = req.params.name;
  console.log("params:", restaurantName);
  try {
    const photos = await PhotoGallery.findOne({
      restaurantName: req.params.name,
    });
    console.log("in the get photos:", photos);
    if (!photos)
      return res.status(400).json({ msg: "Restaurant was not found." });
    res.json(photos);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Restaurant was not found." });
  }
});

module.exports = router;
