const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/e2891cd12391ee005d964973a74728be/${latitude},${longitude}?units=ca`;

  request({ url, json: true }, (error, { body: res }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (res.error) {
      callback(error, undefined);
    } else {
      callback(
        undefined,
        `${res.daily.data[0].summary} It is currently ${res.currently.temperature} degrees out. There is a ${res.currently.precipProbability} % chance of rain.`
      );
    }
  });
};

module.exports = forecast;
