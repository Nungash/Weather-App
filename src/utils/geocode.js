// const request = require("request");
// const geocode = (address, callback) => {
//   const geoUrl =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     address +
//     ".json?access_token=pk.eyJ1IjoibWFyeS0xOTc3IiwiYSI6ImNra3N2cHo5azAybHEycWp1YjBtNWRxOHcifQ.RIq7dBf2j_54WmppdLmqKg&limit=1";

//   request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to location services!", undefined);
//     } else if (response.body.features.length === 0) {
//       callback("Unable to find location. Try another search.", undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[1],
//         longitude: response.body.features[0].center[0],
//         location: response.body.features[0].place_name,
//       });
//     }
//   });

// };

// module.exports = geocode;

// const request = require("request");
// const geocode = (address, callback) => {
//   const geoUrl =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     address +
//     ".json?access_token=pk.eyJ1IjoibWFyeS0xOTc3IiwiYSI6ImNra3N2cHo5azAybHEycWp1YjBtNWRxOHcifQ.RIq7dBf2j_54WmppdLmqKg&limit=1";

//   request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to location services!", undefined);
//     } else if (response.body.features.length === 0) {
//       callback("Unable to find location. Try another search.", undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[1],
//         longitude: response.body.features[0].center[0],
//         location: response.body.features[0].place_name,
//       });
//     }
//   });

// };

// module.exports = geocode;
const request = require("request");
const geocode = (address, callback) => {
  const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoibWFyeS0xOTc3IiwiYSI6ImNra3N2cHo5azAybHEycWp1YjBtNWRxOHcifQ.RIq7dBf2j_54WmppdLmqKg&limit=1";

  request({ url: geoUrl, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
