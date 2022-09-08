import { NavLink } from 'react-router-dom';

export const NavButton = ({ to, className = '', children = '' }: any) => {
    return (
        <NavLink to={to} className={`${className} btn primary`}>
            {children}
        </NavLink>
    );
};