import { NavLink } from 'react-router-dom';
import { BurgerMenu } from './smart/BurgerMenu';
import { MainRoutes } from './smart/MainRoutes';

export const AppHeader = () => {
    return (
        <header className="app-header">
            <nav className="main-nav">

                <BurgerMenu></BurgerMenu>

                <div className="app-logo">
                    <NavLink to={'/'} className="nav-link"><h2>EP</h2></NavLink>
                </div>

                <MainRoutes routes={["Work","Contact","About"]}/>

                <ul className="main-menu">
                    <NavLink to="/auth" className="nav-link">Login</NavLink>
                </ul>


            </nav>
        </header>
    );
};
