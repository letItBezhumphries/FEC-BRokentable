const PhotoGallery = require('../database/photosModel');
const restaurantIds = require('./restaurant_ID.json');
const fs = require('fs');

// generates a random total number of photos per restaurant
var generateRandomPhotoCount = function (min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

//this function takes in a number and returns an array populated with the given number of unsplash urls 
var createPhotoCollection = function (totalPhotos, urlString) {
  var output = [];
  while (totalPhotos > 0) {
    output.push(urlString);
    totalPhotos -= 1;
  }
  return output;
};

var photoGallerySeeder = function (restaurantIds) {
  let photoGalleries = [];
  for (var i = 0; i < restaurantIds.length; i++) {
    photoGalleries.push({
      _id: restaurantIds[i].ID,
      restaurantName: restaurantIds[i].name,
      heroImage: "https://source.unsplash.com/collection/4239193/1450x260/",
      scrollerImage: "https://source.unsplash.com/collection/4239193/400x400/",
      galleryLeft: "https://source.unsplash.com/collection/4239193/147x147/",
      galleryCenter: "https://source.unsplash.com/collection/4239193/296x296/",
      galleryRight: "https://source.unsplash.com/collection/4239193/98x98/",
      photos: createPhotoCollection(generateRandomPhotoCount(1, 55), "https://source.unsplash.com/collection/4239193/400x400/")
    })
  }
  
  return photoGalleries;
}

const galleries = photoGallerySeeder(restaurantIds);


const writeDataToFile = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err);
  }
}

writeDataToFile(galleries, './seed/photogalleries.json');

module.exports = galleries;
