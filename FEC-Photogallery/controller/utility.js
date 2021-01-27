const { PhotoGallery } = require('../database/photosModel');

var getPhotosForRestaurant = function(id, callback) {
  PhotoGallery.find({ id: id}).then(photos => {
    console.log('results: ', photos)
    callback(null, photos);
  }).catch(err => {
    console.log('err in getPhotosForRestId', err);
    callback(err);
  })
}

var getPhotoGalleryForRestaurant = function(id, callback) {
  
}

var updatePhotoCollectionForRestaurant = function(id, callback) {

}

var deletePhotoForRestaurant = function(id, callback) {
  
}

module.exports = {
  getPhotosForRestaurant,
  getPhotoGalleryForRestaurant,
  updatePhotoCollectionForRestaurant,
  deletePhotoForRestaurant
}
