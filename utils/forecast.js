const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b5b9c3b9e7791900c6f33020d52562bd&query=' + latitude +',' + longitude +'&units=m';
    
    request({url: url, json: true}, (error, response)=>{
        if(error) {
            callback('Unable to connect weather service!', undefined);
        }
        else if( response.body.error) {
            callback('Unable to find the location.', undefined);
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike,' degrees out ')
        }
    })
}

module.exports = forecast;