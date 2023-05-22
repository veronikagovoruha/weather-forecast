import s from './forecastItem.module.scss';
import classNames from "classnames";

import { useSearchParams } from "react-router-dom";

const ForecastItem = ({forecast}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();

    const city = searchParams.get('search');

    const elements =  forecast.map(({ astro, day, hour }) => {
    const srcUrl = hour[currentHour].condition.icon;
    const text = hour[currentHour].condition.text;
    return (<>
        <li className={classNames(s['item'])}>
        <p className={classNames(s['text', 'today'])}>Today: {city}</p>
        <p className={classNames(s['text', 'today'])}>{currentHour} : {currentMinutes}</p>
        <p className={classNames(s['text', 'today'])}>{hour[currentHour].temp_c}</p>
        <img src={srcUrl}/>
        <p>{text}</p>
        <p>Daily chance of rain: {day.daily_chance_of_rain}</p>
        </li>

        <li className={classNames(s['item'])}>
        <p>More info</p>
        <p className={classNames(s['text', 'today'])}>Sunrise: {astro.sunrise}</p>
        <p className={classNames(s['text', 'today'])}>Sunset: {astro.sunset}</p>

        <p className={classNames(s['text', 'today'])}>Moonset: {astro.moonset}</p>
        <p className={classNames(s['text', 'today'])}>Moonrise: {astro.moonrise}</p>
        </li>
        <li className={classNames(s['item'])}>
        <p>Maxtemp C: {day.maxtemp_c}</p>
        <p>Mintemp C: {day.mintemp_c}</p>
        </li>
    </>
    )})
    return (
        <>
            {elements}
        </>
    )
}

export default ForecastItem;