import WeatherSearch from '../WeatherSearch/WeatherSearch';

import s from './header.module.scss'

const Header = () => {
    return(
        <header className={s.header}>
            <WeatherSearch />
        </header>
    )
}

export default Header;