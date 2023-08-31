import { TypeCurrentFilm } from '../types/TypesFilm'

export default function FullFilm({currentFilm}: {currentFilm: TypeCurrentFilm}) {
  return (
    <div className="movie-card">
        <img className="movie-poster" src={currentFilm.Poster} alt="Movie Poster"/>
        <div className="movie-details">
            <h2 className="movie-title">{currentFilm.Title}</h2>
            <p className="movie-year">{currentFilm.Year}</p>
            <p className="movie-genre">{currentFilm.Genre}</p>
            <p className="movie-runtime">{currentFilm.Runtime}</p>
            <p className="movie-director">{currentFilm.Director}</p>
            <p className="movie-actors">{currentFilm.Actors}</p>
            <p className="movie-rating">{currentFilm.imdbRating}</p>
        </div>
    </div>
  )
}
