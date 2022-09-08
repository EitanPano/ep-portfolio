import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeContext, Theme } from './context/ThemeContext';
import { localStore } from './services/utils';
import './styles/main.scss';

// Views
import { Home } from './views/Home';
import { Auth } from './views/Auth';
import { Work } from './views/Work';
import { About } from './views/About';
import { Contact } from './views/Contact';

// Components
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';

export const App = () => {
    const preferredTheme = localStore.get('theme');
    const [theme, setTheme] = useState(
        preferredTheme === Theme.dark ? Theme.dark : Theme.light
    );

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Router>
                <div className="app" id={theme}>
                    
                    <AppHeader></AppHeader>
                    <Routes>
                        <Route element={<Work />} path="/work"></Route>
                        <Route element={<Contact />} path="/contact"></Route>
                        <Route element={<About />} path="/about"></Route>
                        <Route element={<Auth />} path="/auth"></Route>
                        <Route element={<Home />} path="/"></Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <AppFooter></AppFooter>
                </div>
            </Router>
        </ThemeContext.Provider>
    );
};
