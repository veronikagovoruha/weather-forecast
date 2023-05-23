import ForecastList from '../../modules/ForecastList/ForecastList';
import ForecastHoursList from '../../modules/ForecastHoursList/ForecastHoursList';

import classNames from "classnames";
import s from './mainPage.module.scss';


const MainPage = () => {
  return (
    <section className='container'>
      <div className={classNames(s['main'])}>
        <ForecastList />
        <ForecastHoursList />
      </div>
    </section>
  );
};

export default MainPage;
