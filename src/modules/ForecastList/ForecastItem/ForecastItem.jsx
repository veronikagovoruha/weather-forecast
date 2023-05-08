
const ForecastItem = ({forecast}) => {
    const {temp_c,  pressure_in, last_updated } = forecast;

    const elements =  forecast.map(({date, astro, day}) => <li>
        <p>date: {date}</p>
        <p>sunrise: {astro.sunrise}</p>
        <p>sunset: {astro.sunset}</p>
        <p>moonset: {astro.moonset}</p>
        <p>moonrise: {astro.moonrise}</p>
        <p>condition: {day.condition.text}</p>

        <p>daily_chance_of_rain: {day.daily_chance_of_rain}</p>
        <p>maxtemp_c: {day.maxtemp_c}</p>
    </li>)
    return (
        <>
            {elements}
        </>
    )
}

export default ForecastItem;