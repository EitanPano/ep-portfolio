import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './styles/main.scss';

// Views
import { Home } from './views/Home';
import { Work } from './views/Work';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Auth } from './views/Auth';

// Components
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';

export const App = () => {
    return (
        <Router>
            <div className="app" id='light'>
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
    );
};
