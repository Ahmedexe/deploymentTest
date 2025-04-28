
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/weather';

export const getWeather = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data.weather;
    } catch (err) {
        throw new Error('Error fetching weather data')
    }
}