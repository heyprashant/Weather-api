const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=b5b9c3b9e7791900c6f33020d52562bd&query=37.8267,-122.4233&units=m';

request( { url : url, json: true }, ( error, response )=> {
    console.log( response.body.current.weather_descriptions[0]+'. It is currently',response.body.current.temperature,'degrees out. It feels like',response.body.current.feelslike,'degrees out');
});