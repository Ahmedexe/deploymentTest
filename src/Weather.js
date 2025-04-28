import React, { useEffect, useState } from 'react';
import { getWeather } from './weatherService';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weatherData = await getWeather();
                setWeather(weatherData);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch weather data');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) {
        return <div>Loading weather...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Current Weather</h2>
            <p>{weather}</p>
        </div>
    );
};

export default Weather;