import { httpClient } from "../api/http.ts";

export function getMovies() {
    return httpClient.get('/movie/popular');
}

export function getMovieById(id: string){
    return httpClient.get(`/movie/${id}`);
}