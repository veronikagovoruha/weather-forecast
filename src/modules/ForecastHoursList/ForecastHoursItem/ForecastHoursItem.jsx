import s from './forecastHoursItem.module.scss';
import classNames from "classnames";

const ForecastHoursItem = ({weather}) => {
    const {condition, time, dewpoint_c} = weather;

    return (
        <li className={classNames(s['item'])}>
            <p className={classNames(s['text', 'time'])}>{time}</p>
            <p className={classNames(s['text', 'dewpoint'])}>{dewpoint_c}</p>
            <img className={classNames(s['img'])} src={condition.icon} alt="" />
            <p className={classNames(s['text'])}>{condition.text}</p>
        </li>
    )
}

export default ForecastHoursItem;