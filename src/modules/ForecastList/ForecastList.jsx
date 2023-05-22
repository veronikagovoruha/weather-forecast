import useForecastContext from '../../shared/hooks/useForecastContext';

import ForecastItem from './ForecastItem/ForecastItem';

import s from './forecastList.module.scss';

const ForecastList = () => {
  const { forecast } = useForecastContext();

  return (
    <ul className={s.list}>
      <ForecastItem forecast={forecast} />
    </ul>
  );
};

export default ForecastList;
