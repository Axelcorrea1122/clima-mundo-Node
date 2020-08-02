const argv = require('./config/yargs-config').argv;
const { apiKey, encodedURL } = require('./config/api-config');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const colors = require('colors');



const getInfo = async(direccion) => {

    try {

        const lugar = await getLugarLatLng(direccion);
        const temp = await getClima(lugar.lat, lugar.lng);
        return {
            lugar,
            temp
        };

    } catch (err) {
        throw err;
    }

}




getInfo(argv.direccion)
    .then(res => console.log(`El clima de ${colors.green(res.lugar.direccion)} es de ${colors.green(res.temp)}`))
    .catch(console.log)