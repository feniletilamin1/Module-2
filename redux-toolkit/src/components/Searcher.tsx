import { useRef } from "react";
import { useAppDispatch } from "../app/hooks";
import { getFilmsAsync } from "../app/slices/filmSlice";
import { Link } from "react-router-dom";

export default function Searcher() {
    const dispatch = useAppDispatch();
    const inputFilm = useRef<HTMLInputElement>(null);

    const onGetFilms = () => {
        if(inputFilm.current)
            dispatch(getFilmsAsync(inputFilm.current.value));
    }    

    return (
        <div className="searcher-wrapper">
            <form className="searcher">
                <input ref={inputFilm} onChange={onGetFilms} type="search" className="searcher__input" placeholder="Введите название фильма..."/>
            </form>
            <Link className="favouritesLink" to="/favourites">Избранное</Link>
        </div>
    )
}
