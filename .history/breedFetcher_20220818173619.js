const request = require("request")

const args = process.argv.slice(2);

request("https://api.thecatapi.com/v1/breeds/search?name=" + args, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  if()
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  //console.log(typeof data);
  console.log(data[0].description)
});