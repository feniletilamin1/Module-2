import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {TypeCurrentFilm, TypeResponse, TypeStateFilm } from "../../types/TypesFilm";

const initialState: TypeStateFilm = {
    Search: [],
    Loading: false,
    totalResults: 0,
    Response: true,
    Error: null,
    Favourites: []
}

export const getFilmsAsync = createAsyncThunk(
    'fethFilms',
     async (filmName: string, {rejectWithValue}) => {
        try{
            const response = await fetch(`http://www.omdbapi.com/?apikey=64405bd2&s=${filmName}`);
            if(!response.ok) {
                return rejectWithValue("Ошибка загрузки фильмов")
            }
            const data = response.json() as Promise<TypeResponse>;
            return data;
        }
        catch(e) {
            return rejectWithValue("Ошибка загрузки фильмов")
        }
    }
);

export const addFouviritesFilm = createAsyncThunk(
    'addFavourites',
     async (filmId: string, {rejectWithValue}) => {
        try{
            const response = await fetch(`http://www.omdbapi.com/?apikey=64405bd2&i=${filmId}`);
            if(!response.ok) {
                return rejectWithValue("Ошибка загрузки фильмов")
            }
            const data = response.json() as Promise<TypeCurrentFilm>;
            return data;
        }
        catch(e) {
            return rejectWithValue("Ошибка загрузки фильмов")
        }
    }
);

export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getFilmsAsync.pending, (state) => {
            state.Loading = true;
            state.Search = [];
        })
        .addCase(getFilmsAsync.fulfilled, (state, action) => {
            state.Search = action.payload.Search;
            state.totalResults = action.payload.totalResults;
            state.Response = action.payload.Response;
            state.Loading = false;
            state.Error = null;
        })
        .addCase(getFilmsAsync.rejected, (state, action) => {
            state.Error = action.error as string;
            state.Loading = false;
        })
        .addCase(addFouviritesFilm.fulfilled, (state, action) => {
                state.Favourites.push(action.payload);
        })
        .addCase(addFouviritesFilm.rejected, (state, action) => {
            state.Error = action.error as string;
            state.Loading = false;
        })
    }
});

export default filmsSlice.reducer;

