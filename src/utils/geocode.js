const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibmF0dHlkb28iLCJhIjoiY2s1cDhla2o5MWN0OTNrcndvaTJjaWJ6cCJ9.B916am43Jphn9GomyFc0Ig`;

  request({ url, json: true }, (error, { body: res }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (res.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: res.features[0].center[1],
        longitude: res.features[0].center[0],
        location: res.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
