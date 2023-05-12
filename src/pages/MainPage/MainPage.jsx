import ForecastList from '../../modules/ForecastList/ForecastList';

import s from './../../sass/base/_container.scss';

const MainPage = () => {
  return (
    <div className={s.container}>
      <ForecastList />
    </div>
  );
};

export default MainPage;
