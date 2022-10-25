const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://www.thebluealliance.com/team/frc3461?X-TBA-Auth-Key=hOngAA1OYRpYtrfePLodT2G27R7fSBfrGJ57RwH1sOZJxaJv3rHGfhH37aLitVNb')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });