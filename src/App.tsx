import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/sections/main/Main';
import { Skills } from './layouts/sections/skills/Skills';
import { Projects } from './layouts/sections/projects/Projects';
import { ContactMe } from './layouts/sections/contact-me/ContactMe';
import { Footer } from './layouts/footer/Footer';

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
