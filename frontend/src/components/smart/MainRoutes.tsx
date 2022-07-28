import { NavLink } from 'react-router-dom';

export const MainRoutes = ({routes}:any) => {

    return (
        <div>
            <ul className="main-routes">
            {routes.map((route:any) => 
                <NavLink key={route} to={route.toLowerCase()} className="nav-link">{route}</NavLink>
                )}
            </ul>
        </div>
    )
};
