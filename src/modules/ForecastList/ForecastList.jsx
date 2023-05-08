import { useState, useEffect } from 'react';

import useForecastContext from '../../shared/hooks/useForecastContext';

import ForecastItem from './ForecastItem/ForecastItem';

import s from './forecastList.module.scss';

import { getCurrentWeather } from '../../shared/services/api/weatherApi';

const ForecastList = () => {
  const { forecast } = useForecastContext();

  // const [current, setCurrent] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     const fetchCurrentWeather = async() => {
  //         setLoading(() => true)
  //         try{
  //             const {data} = await getCurrentWeather();
  //             setCurrent(() => data.current);
  //             setLoading(() => false);
  //         }catch(error){
  //             setError(() => error);
  //             setLoading(() => false);
  //         }
  //     }
  //     fetchCurrentWeather();
  // }, []);

  return (
    <ul className={s.list}>
      {/* {elements} */}
      <ForecastItem forecast={forecast} />
    </ul>
  );
};

export default ForecastList;
