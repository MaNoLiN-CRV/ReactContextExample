import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { Movie } from '../config/entities/Movie'
import ResultMovie from '../config/entities/ResultMovie';
import App from '../../App';
import { AppContext } from '../context/Context';

interface sliderProps {
  height:number;
}

export default function Slider({height}: sliderProps) {
  const context = useContext(AppContext);
  let renderNumber = 0;
  return (
    <View>
      <ScrollView style = {styles.contenedor} horizontal={true}>
        { context?.moviesLoaded?.map((item) => (
          renderNumber++,
          console.log("// RESULT MOVIES INDEX: " + renderNumber + " //"),
          console.log("[+] Renderizando " + item?.movies?.length + " peliculas."),
          item?.movies?.map((movie) => (
          <Image style = {styles.imagen} key = {movie.id}
            source={{
              uri: `https://image.tmdb.org/t/p/original${movie.poster}`,
            }}
          />))
          
        ))}

      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  contenedor: {
    height: 300,
  }, 
  imagen: {
    width: 200,
    //height: 200,
    margin: 1
  }
})