import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params:{
        key: 'c4d7e60db0d241968f6174450230804'
    }
});

export const getCurrentWeather = () => {
    return instance.get('/current.json', {
        params:{
            q: 'Paris'
        }
    })
}

export const searchWeather = (query) => {
    return instance.get('/forecast.json', {
        params:{
            q: query,
            days: 1
        }
    })
}