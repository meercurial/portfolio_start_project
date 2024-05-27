import { Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { Header } from './layouts/Header';
import { Main } from './layouts/Header/sections/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path='' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
