import ForecastHoursItem from "./ForecastHoursItem/ForecastHoursItem";
import { useEffect, useState } from 'react';

import useForecastContext from '../../shared/hooks/useForecastContext';
import s from './forecastHoursList.module.scss';
import classNames from "classnames";

const ForecastHoursList = () => {
    const { forecast } = useForecastContext();
    const [hourItems, setHourItems] = useState([]);

    console.log(forecast);

    useEffect(() => {
        if(forecast.length > 0) {
            setHourItems(() => forecast[0].hour
                .filter((_, index) => index % 3 === 0)
                .map(weather => <ForecastHoursItem weather={weather} />));
        }
    }, [forecast, setHourItems])


    return (<ul className={classNames(s['list'])}>
        {hourItems}
    </ul>)
}

export default ForecastHoursList;
