const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&APPID=d63cdf2070e6b8462e524b33882229c6`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback(`unable to connect`);
    } else if (response.statusCode === 400) {
      // console.log(response.body.message);
      callback(response.body.message);
    } else {
      callback(undefined, response.body.coord);
    }
  });
};

module.exports = geocode;
