import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";


interface ContextMovies {
  // AQUÍ VA TODA LA MANDANGA QUE VA A TENER EL CONTEXTO
  // SE DEFINE LA ESTRUCTURA
  mandanga:string
};

export const ContextoMandanga = createContext<ContextMovies | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    //AQUÍ SE MANEJA LA LOGICA DE NEGOCIO 
    // SE LE DA VALOR A LA MANDANGA Y SE INICIALIZAN LAS COSITAS
    const valor: ContextMovies = {
        mandanga : "ESTE ES EL VALOR DE LA MANDANGA"
    }
  return(
    <ContextoMandanga.Provider value={valor}>
      {children}
    </ContextoMandanga.Provider>
  );

};
