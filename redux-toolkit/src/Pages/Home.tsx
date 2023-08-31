import Searcher from "../components/Searcher";
import ListFilms from "../components/ListFilms";
import { useAppSelector } from "../app/hooks";

export default function Home() {
    const {Search, Loading, Response, totalResults, Error} = useAppSelector((state) => state.films);
    return (
        <>
            <Searcher />
            {Loading && <p>Loading...</p>}
            {(!Response || Error) && <p>Ошибка загрузки фильмов</p>}
            {!Loading && Response && Search && <ListFilms totalResults={totalResults} films={Search}/>} 
            {!Search && <p>Фильмы не найдены</p>}
        </>
    )
}
