import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layouts/Header';
import { Main } from './layouts/sections/Main';
import { Projects } from './layouts/sections/Projects';
import { ContactMe } from './layouts/sections/ContactMe';
import { Footer } from './layouts/Footer';
import { Skills } from './layouts/sections/Skills';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Main />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
