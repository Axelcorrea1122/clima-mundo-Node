const { apiKey } = require('../config/api-config')
const axios = require('axios');


const getClima = async(lat, lng) => {

    let res = {};

    try {
        res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
    } catch (err) {
        throw err;
    }


    return res.data.main.temp;
}


module.exports = {
    getClima
}