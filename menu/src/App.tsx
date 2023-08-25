import {NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import TimeAttackPage from './Pages/TimeAttackPage';
import DriftPage from './Pages/DriftPage';
import ForzaPage from './Pages/ForzaPage';
import HomePage from './Pages/HomePage';

function Menu() {
  return (
    <nav className="menu">
      <NavLink to ="/" className={(navData) => navData.isActive ? "menu__item menu__item-active" : "menu__item"}>Главная</NavLink>
      <NavLink to ="/drift" className={(navData) => navData.isActive ? "menu__item menu__item-active" : "menu__item"}>Дрифт-такси</NavLink>
      <NavLink to ="/timeattack" className={(navData) => navData.isActive ? "menu__item menu__item-active" : "menu__item"}>Time Attack</NavLink>
      <NavLink to ="/forza" className={(navData) => navData.isActive ? "menu__item menu__item-active" : "menu__item"}>Forza Karting</NavLink>
    </nav>
  )
}


function App() {
  return (
    <div>
    <div className="page">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </Router>
    </div>
  </div>

  );
}

export default App;
