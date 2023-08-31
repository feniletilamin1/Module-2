import { Link } from "react-router-dom";
import { TypeFilm } from "../types/TypesFilm";
import Film from "./Film";

type ListFilmsProps = {
    films: TypeFilm[]
    totalResults: number,
}

export default function ListFilms(props: ListFilmsProps){
    const {films, totalResults} = props;
    return (
        <>
            <p>Найдено всего фильмов: {totalResults}</p>
            <div className="films">
                {films.map(item =>
                    <Link key={item.imdbID} to={`/film/${item.imdbID}`}>
                        <Film {...item}/>
                    </Link>
                )}
            </div>
        </>
    )
}
