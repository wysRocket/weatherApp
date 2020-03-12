import * as axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://api.openweathermap.org/data/2.5'
});
const appid = 'd21a69f7a784d46986923a31e411755e'
export const weatherAPI = {
    getLocalWeather (latt, long) {
        return instance.get(`weather?lat=${latt}&lon=${long}&appid=${appid}`)
    },
    getParticularCityWeather (cityName) {
        return instance.get(`weather?q=${cityName}&appid=${appid}`)
    }   
}