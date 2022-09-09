import { NavLink } from 'react-router-dom';
import { BurgerMenu } from './simple/BurgerMenu';
import { MainRoutes } from './smart/MainRoutes';
import { ToggleTheme } from './smart/ToggleTheme';

import {Theme, useTheme } from '../context/ThemeContext';
import { localStore } from '../services/utils';


export const AppHeader = () => {
    
    const {theme, setTheme} = useTheme();

    const onSetTheme = () => {
        const currTheme = (theme === 'light' ? Theme.dark : Theme.light);
        localStore.set('theme', currTheme);
        setTheme(currTheme);
    }
    
    return (
        <header className="app-header">
            <nav className="main-nav grid-container background text">

                <BurgerMenu></BurgerMenu>

                <div className="app-logo">
                    <NavLink to={'/'} className="nav-link"><h2>EP</h2></NavLink>
                </div>

                <ul className="features">
                    <ToggleTheme onSetTheme={onSetTheme} preferredTheme={localStore.get('theme')} />
                    <button className='btn no-border primary skew'>Resume</button>
                </ul>

                <MainRoutes routes={["Work","Contact","About"]}/>
                
            </nav>
        </header>
    );
};
