const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=b5b9c3b9e7791900c6f33020d52562bd&query=37.8267,-122.4233&units=m';

request( { url : url, json: true }, ( error, response )=> {
    console.log( response.body.current.weather_descriptions[0]+'. It is currently',response.body.current.temperature,'degrees out. It feels like',response.body.current.feelslike,'degrees out');
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bhiwani.json?access_token=pk.eyJ1IjoiaGV5cHJhc2hhbnQiLCJhIjoiY2tpdHd1bjg5MDU2OTJxbXd4c2pxYWF3NSJ9.6j0sGJDAiPl51skW7CEarQ&limit=1';

request ( { url: geocodeURL, json: true }, ( error, response )=>{
    console.log('Lattitude:', response.body.features[0].center[1]);
    console.log('Longitude:',response.body.features[0].center[0]);

});