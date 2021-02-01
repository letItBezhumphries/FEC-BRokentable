const restaurantIds = require("./restaurant_ID.json");

// this function generates a random count number that represents the amount of photos that will be created for each restaurant
var generateRandomPhotoCount = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//this function takes in a number and a url string and returns an array populated with the given number of unsplash urls
var createPhotoCollection = function (totalPhotos, urlString) {
  var output = [];
  while (totalPhotos > 0) {
    output.push(urlString);
    totalPhotos -= 1;
  }
  return output;
};

const generateRestaurantPhotos = (restaurantIdsArray, photoURL) => {
  let restaurantsArray = [];
  for (var i = 0; i < restaurantIdsArray.length; i++) {
    let photosArray = createPhotoCollection(
      generateRandomPhotoCount(1, 55),
      photoURL
    );
    restaurantsArray.push({
      restaurantId: restaurantIds[i].ID,
      restaurantName: restaurantIds[i].name,
      heroImgSrc: "https://source.unsplash.com/collection/4239193/1450x260/",
      photogallery: photosArray,
    });
  }
  return restaurantsArray;
};

//create the final seeding array
const seedData = generateRestaurantPhotos(
  restaurantIds,
  "https://source.unsplash.com/collection/4239193/400x400/"
);

module.exports = seedData;
