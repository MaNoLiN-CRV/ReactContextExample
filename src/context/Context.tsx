import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import ResultMovie from "../config/entities/ResultMovie";
import { FilmAdapter } from "../adapter/FilmAdapter";

type ContextMovie = {
  moviesLoaded: ResultMovie[]; 
  setMoviesLoaded: (movies: ResultMovie[]) => void; 
  setNowPlaying: (movies : ResultMovie) => void;
  nowPlaying: ResultMovie | null;
};


export const AppContext = createContext<ContextMovie | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [moviesLoaded, setMoviesLoaded] = useState<ResultMovie[]>([]);
  const [nowPlaying, setNowPlaying] = useState<ResultMovie | null>(null);

  const contextValue: ContextMovie = {
    moviesLoaded,
    setMoviesLoaded,
    setNowPlaying,
    nowPlaying
  };

  const loadMovies = async () => {
    const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying, nowPlaying);

    if (movies != null) {
            console.log("................... peliculas cargadas ...........................");
            setNowPlaying(movies);
            setMoviesLoaded([...moviesLoaded, movies!]);
            console.log(" --> peliculas cargadas en nowPlaying: " + JSON.stringify(nowPlaying?.movies));
            console.log("................................................................");
          }
      }

    useEffect(() => {
        loadMovies();
    }, [nowPlaying?.page])

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );

};
