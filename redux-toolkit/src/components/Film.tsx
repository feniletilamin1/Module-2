import { TypeFilm } from "../types/TypesFilm";

export default function Film(props: TypeFilm) {
    const {Poster, Title, Year} = props;
    return (
        <div className="movie-card">
            <img src={Poster} alt="Movie Poster"/>
            <div className="movie-details">
                <h2 className="movie-title">{Title}</h2>
                <p className="movie-year">{Year}</p>
            </div>
        </div>
  )
}
