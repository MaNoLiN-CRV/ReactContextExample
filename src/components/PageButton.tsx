import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AppContext } from '../context/Context';

const PageButton = () => {
  const context = React.useContext(AppContext)
  return (
    <View style={styles.container}>
      <Button
      onPress={() => { 
        if (context != null) {
            //* Crear un nuevo objeto clonando el estado actual
            if(context.nowPlaying != null) {
              const updatedNowPlaying = {
                ...context.nowPlaying,
                page: context.nowPlaying.page + 1,
                // Incrementar la página
            };
            
            //context.setMoviesLoaded(updatedArray);
            context.setNowPlaying(updatedNowPlaying);
            }
        }
      }}
      title='NEXT BLOSTE'
      />
    </View>
  );
};

export default PageButton;

const styles = StyleSheet.create({
  container: {}
});
