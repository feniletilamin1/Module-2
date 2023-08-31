import { useNavigate, useParams } from "react-router-dom";
import { TypeCurrentFilm } from "../types/TypesFilm";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import { useAppDispatch } from "../app/hooks";
import { addFouviritesFilm } from "../app/slices/filmSlice";
import FullFilm from "../components/FullFilm";



export default function CurrentFilm(){
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [currentFilm, setCurrentFilm] = useState<TypeCurrentFilm>();
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();

    const getCurrentFilmAsync = async (filmId: string) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=64405bd2&i=${filmId}`);
            const data = response.json() as Promise<TypeCurrentFilm>
            setCurrentFilm(await data)
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }

    }
    
    useEffect(() => {
        if(id)
            getCurrentFilmAsync(id);
    }, [id])

    if(!id) {
        return <NotFound erorText="Неверно указан id фильма"/>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {!loading && currentFilm && currentFilm.Response === "True" &&
               <>
                 <FullFilm  currentFilm={currentFilm}/>
                <button onClick={() => {dispatch(addFouviritesFilm(id)); navigate(-1) }}>Добавить в избранное</button>
               </>
            }
            {currentFilm && currentFilm.Response ==="False" && 
                <NotFound erorText="Фильм не найден"/>
            }
        </>
     
    )
}
