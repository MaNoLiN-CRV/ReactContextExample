import { Config } from "../config/Config";
import { Movie } from "../config/entities/Movie";
import ResultMovie from "../config/entities/ResultMovie";
import { movieMapper } from "../config/mapper/movieMapper";
import { resultMovieMapper } from "../config/mapper/resultMovieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory } from "./http/HttpFactory";
import { HttpFactory2 } from "./http/HttpFactory2";
import { HttpFetch } from "./http/HttpFetch";

export interface DataMovieRequest {
    total: number;
    page: number;
}

export class FilmAdapter {

    static ROUTES = {
        nowPlaying: "/now_playing"
    }

    static async getMovies(route: string, data:DataMovieRequest | null): Promise<ResultMovie | null> {
        const http = HttpFactory2.build();
        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        const movies = await http.getFilms(route, data ?? {total:100, page:1});
        if (movies instanceof HttpError) return null;
        const dataMovies = resultMovieMapper(movies);
        return dataMovies;
    }
}