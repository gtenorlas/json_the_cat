const request = require("request");



const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?name=" + breedName, function(error, response, body) {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(null, []);
    } else {
      return callback(null, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };
