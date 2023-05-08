import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useForecastContext from '../../shared/hooks/useForecastContext';

import { searchWeather } from '../../shared/services/api/weatherApi';

import WeatherSearchForm from './WeatherSearchForm/WeatherSearchForm';

const WeatherSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { forecast, setForecast } = useForecastContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(() => true);
      try {
        const { data } = await searchWeather(search);
        setForecast(() => data.forecast.forecastday);
        setLoading(() => false);
      } catch (error) {
        setError(() => error);
        setLoading(() => false);
      }
    };

    if (search) {
      fetchWeather();
    }
  }, [search]);

  const changeSearch = data => {
    const { search } = data;
    setSearchParams({ search });
  };
  console.log(1, forecast);
  return (
    <>
      <WeatherSearchForm onSubmit={changeSearch} />
    </>
  );
};

export default WeatherSearch;
