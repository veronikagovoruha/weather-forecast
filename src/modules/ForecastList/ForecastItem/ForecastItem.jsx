import s from './forecastItem.module.scss';
import classNames from "classnames";

import { useSearchParams } from "react-router-dom";

const ForecastItem = ({forecast}) => {
    console.log(forecast);
    const [searchParams, setSearchParams] = useSearchParams();
    const date = new Date();
    const currentHour = date.getHours();

    const city = searchParams.get('search');

    const elements =  forecast.map(({date, astro, day, hour}) => <>
        <li className={classNames(s['item'])}>
        <p className={classNames(s['text', 'today'])}>Today: {city}</p>
        <p className={classNames(s['text', 'today'])}>{hour[currentHour].time}</p>
        <p className={classNames(s['text', 'today'])}>{hour[currentHour].temp_c}</p>
        </li>
        <li className={classNames(s['item'])}>
        <p className={classNames(s['text', 'today'])}>Sunrise: {astro.sunrise}</p>
        <p className={classNames(s['text', 'today'])}>Sunset: {astro.sunset}</p>
        </li>
        <li className={classNames(s['item'])}>
        <p className={classNames(s['text', 'today'])}>Moonset: {astro.moonset}</p>
        <p className={classNames(s['text', 'today'])}>Moonrise: {astro.moonrise}</p>
        </li>
        <li className={classNames(s['item'])}>
        <p className={classNames(s['text', 'today'])}>Condition: {day.condition.text}</p>
        </li>
        <li className={classNames(s['item'])}>
        <p>Daily chance of rain: {day.daily_chance_of_rain}</p>
        <p>Maxtemp C: {day.maxtemp_c}</p>
        </li>
    </>
    )
    return (
        <>
            {elements}
        </>
    )
}

export default ForecastItem;