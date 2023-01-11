import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';

import { Styles } from './Src/Styles/Page';

import Theater from './Src/Components/Theater';

const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(()=>{

    async function FetchData() {
      const Res = await fetch('https://api.b7web.com.br/cinema/')
      const Data = await Res.json()
      setMovies(Data)
    }

    FetchData()

  }, [])
  
  return (
    <SafeAreaView style={Styles.Page}>
      <StatusBar hidden={true}/>

      <FlatList 
        style={Styles.List}
        data={movies}
        renderItem={({ item }) => (<Theater image={item.avatar} title={item.titulo}/>) }
        keyExtractor={(item)=> item.titulo} 
      />

    </SafeAreaView>
  );
};

export default App;

