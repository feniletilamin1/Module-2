import { TypeCurrentFilm } from '../types/TypesFilm'
import FullFilm from '../components/FullFilm';

type FavouritesProps = {
    films: TypeCurrentFilm[],
}

export default function Favourites(props: FavouritesProps) {
    const { films } = props;
    return (
        <>
            {films.length > 0 &&
                <div className="films">
                    {films.map(item => 
                        <FullFilm currentFilm={item}/>
                    )}
                </div>
            }
            {films.length === 0 && <p>У вас нет избранных фильмов</p>}
        </>
    )
}
