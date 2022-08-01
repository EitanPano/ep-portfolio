import { NavLink } from 'react-router-dom';

export const MainRoutes = ({ routes }: any) => {
    return (
        <ul className="main-routes background-sub">
            {routes.map((route: any) => (
                <NavLink key={route} to={route.toLowerCase()} className="nav-link">
                    {route}
                </NavLink>
            ))}
        </ul>
    );
};
