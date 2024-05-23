import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <ul className={css.menuOrder}>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => clsx(css.linkClass, { [css.activeLink]: isActive })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/movies" 
                        className={({ isActive }) => clsx(css.linkClass, { [css.activeLink]: isActive })}
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;