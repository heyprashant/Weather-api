const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Scranton', (error, data)=>{
    console.log('Error', error);
    console.log('Data', data);
});

forecast(41.4087, -75.6621, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })