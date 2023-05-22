import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useForecastContext from '../../shared/hooks/useForecastContext';

import { searchWeather } from '../../shared/services/api/weatherApi';

import WeatherSearchForm from './WeatherSearchForm/WeatherSearchForm';
import ForecastHoursList from '../ForecastHoursList/ForecastHoursList';

const WeatherSearch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { forecast, setForecast } = useForecastContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchWeather = async () => {
      if(loading){
        try {
          const { data } = await searchWeather(search);
          setForecast(() => data.forecast.forecastday);
          setLoading(() => false);
        } catch (error) {
          setError(() => error);
          setLoading(() => false);
        }
        }
    };

    if (search) {
      fetchWeather();
    }
  }, [search, setForecast, setLoading, loading]);

  const changeSearch = data => {
    const { search } = data;
    setSearchParams({ search });
  };

  return (
    <>
      <WeatherSearchForm onSubmit={changeSearch} />
    </>
  );
};

export default WeatherSearch;
