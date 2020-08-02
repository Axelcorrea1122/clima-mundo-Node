const { apiKey } = require('../config/api-config')
const axios = require('axios');





const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir)

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&APPID=${apiKey}`,
        timeout: 1000,
        headers: { 'Api-Key': `${apiKey}` }
    });

    try {
        const resp = await instance.get();

        const direccion = resp.data.name
        const lat = resp.data.coord.lat
        const lng = resp.data.coord.lon

        return {
            direccion,
            lat,
            lng
        }

    } catch (err) {
        throw err;
    }
}



module.exports = {
    getLugarLatLng
}