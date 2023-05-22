import ForecastList from '../../modules/ForecastList/ForecastList';
import ForecastHoursList from '../../modules/ForecastHoursList/ForecastHoursList';

const MainPage = () => {
  return (
    <div className='container'>
      <ForecastList />
      <ForecastHoursList />
    </div>
  );
};

export default MainPage;
