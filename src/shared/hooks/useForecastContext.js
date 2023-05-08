import { useContext } from 'react';
import { ForecastContext } from '../providers/ForecastProvider';

const useForecastContext = () => {
  const { forecast, setForecast } = useContext(ForecastContext);

  return { forecast, setForecast };
};

export default useForecastContext;
