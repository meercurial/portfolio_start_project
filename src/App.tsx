import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './layouts/Header';
import { Main } from './layouts/Header/sections/Main';
import { Skills } from './layouts/Header/sections/Skills';

function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Header />} />
      </Routes>
      <Main />
      <Skills />
    </div>
  );
}

export default App;
