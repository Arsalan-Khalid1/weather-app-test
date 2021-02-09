const request = require ('request');

const url = `https://api.weatherapi.com/v1/forecast.json?key=9394f9ff73dd45ec9bb85441210902&q=murree`;

request ({url: url}, (error, response) => {
  const data = JSON.parse (response.body);
  console.log (data);
});
