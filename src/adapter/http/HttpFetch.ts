import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { DataMovieRequest } from "../FilmAdapter";
import { Http } from "./Http";
import { HttpError } from "./HttpError";

export class HttpFetch extends Http {
    async getFilms(route : string, {page, total} : DataMovieRequest): Promise<MoviesResponse | HttpError> {
        try {
            if(page > total || page < 0) {
                page = 1;
            }
            const data = await fetch(`${this.url_base}${route}?api_key=${this.key}&page=${page}`);
            const jsonData: MoviesResponse = await data.json();
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}