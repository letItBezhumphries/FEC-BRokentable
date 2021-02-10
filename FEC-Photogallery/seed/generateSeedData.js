const restaurantIds = require("./restaurant_ID.json");
const faker = require("faker");

// this function generates a random count number that represents the amount of photos that will be created for each restaurant
const generateRandomCount = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatePhotoSubjectType = (types) => {
  let randomIndex = generateRandomCount(0, types.length - 1);
  return types[randomIndex];
};

const subjects = ["Interior", "Exterior", "Food", "Drink"];

//this function takes in a number and a url string and returns an array populated with the given number of unsplash urls
const createPhotoCollection = function (
  totalPhotos,
  urlString,
  restaurantId,
  subjectsArr
) {
  var output = [];
  while (totalPhotos > 0) {
    output.push({
      imgSrc: urlString,
      isFlagged: false,
      restaurant: restaurantId,
      dinedOnDate: faker.date.past(),
      subjectType: generatePhotoSubjectType(subjectsArr),
      description: faker.lorem.sentence(),
      username: faker.name.firstName(),
    });
    totalPhotos -= 1;
  }
  return output;
};

const generateRestaurantPhotos = (
  restaurantIdsArray,
  photoURL,
  subjectsArray
) => {
  let restaurantsArray = [];
  for (var i = 0; i < restaurantIdsArray.length; i++) {
    let photosArray = createPhotoCollection(
      generateRandomCount(1, 55),
      photoURL,
      restaurantIdsArray[i].ID,
      subjectsArray
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
  "https://source.unsplash.com/collection/4239193/400x400/",
  subjects
);

module.exports = seedData;
