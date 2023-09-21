const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=298ef377071ac62e0b00ebf251489ff3&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect");
    } else if (body.error) {
      callback(body.error.info);
    } else {
      const weather_details = body.current;
      callback(
        undefined,
        `It is ${weather_details.weather_descriptions[0]}.It is currently ${weather_details.temperature} degrees out.It feels like ${weather_details.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
