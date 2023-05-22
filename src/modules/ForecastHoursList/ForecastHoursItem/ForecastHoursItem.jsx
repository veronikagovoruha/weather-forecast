
const ForecastHoursItem = ({weather}) => {
    const {condition, time, dewpoint_c} = weather;

    return (
        <li>
            <p>{time}</p>
            <p>{dewpoint_c}</p>
            <img src={condition.icon} alt="" />
            <p>{condition.text}</p>
        </li>
    )
}

export default ForecastHoursItem;