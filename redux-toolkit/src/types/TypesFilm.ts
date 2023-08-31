export type TypeFilm = {
    Poster: string,
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
}

export type TypeResponse = {
    Search: TypeFilm[],
    totalResults: number,
    Response: boolean,
}

export type TypeStateFilm  = {
    Loading: boolean,
    Error: string | null,
    Favourites: TypeCurrentFilm[],
} & TypeResponse

export type TypeCurrentFilm = {
    Genre: string,
    Runtime: string,
    Director: string,
    Actors: string,
    imdbRating: string,
    Response: string,
} & Omit<TypeFilm, 'Type'>