import {Routes, Route} from 'react-router-dom';
import './App.css';
import {Header} from './layouts/Header/Header';
import {Main} from './layouts/sections/Main/Main';
import {Projects} from './layouts/sections/Projects/Projects';
import {ContactMe} from './layouts/sections/ContactMe/ContactMe';
import {Footer} from './layouts/Footer/Footer';
import {Skills} from './layouts/sections/Skills/Skills';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header/>}/>
            </Routes>
            <Main/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;
