import axios from "axios";
import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";
import { HttpError } from "./HttpError";
import { DataMovieRequest } from "../FilmAdapter";



export class HttpAxios extends Http {
    async getFilms(route: string, {page, total} : DataMovieRequest): Promise<MoviesResponse | HttpError> {
        try {
            if(page > total || page < 0) {
                page = 1;
            }
            const {data} = await axios.get<MoviesResponse>(`${this.url_base}${route}?api_key=${this.key}&page=${page}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}