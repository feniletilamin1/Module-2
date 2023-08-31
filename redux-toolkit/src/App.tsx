import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import CurrentFilm from './Pages/CurrentFilm';
import NotFound from './Pages/NotFound';
import { useAppSelector } from './app/hooks';
import Favourites from './Pages/Favourites';

function App() {
  const {Favourites:films} = useAppSelector((state) => state.films);
  return (
    <>
      <div className="container">
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/film/:id" element={<CurrentFilm />}/>
          <Route path="*" element={<NotFound erorText="Страницы не существует."/>}/>
          <Route path="/favourites" element={<Favourites films={films}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
