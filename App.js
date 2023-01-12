import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, FlatList, View, ActivityIndicator } from 'react-native';

import { Styles } from './Src/Styles/Page';

import Theater from './Src/Components/Theater';

const App = () => {

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(()=>{

    async function FetchData() {
      const Res = await fetch('https://api.b7web.com.br/cinema/')
      const Data = await Res.json()
      setMovies(Data)
      setLoading(false)
    }

    FetchData()

  }, [])
  
  return (
    <SafeAreaView style={Styles.Page}>
      <StatusBar hidden={true}/>

      <View style={Styles.TitleView}>
        <Text style={Styles.Title}>Filmes em Cartaz</Text>
      </View>

      {loading &&
        <>
          <View style={Styles.AwaitView}>
            <ActivityIndicator size={40} color={'#E2B616'} style={{ padding : 15 }}/>
            <Text style={Styles.AwaitText}>Aguarde</Text>
          </View>
        </>
      }

      {!loading && 
        <>
          <FlatList 
            style={Styles.List}
            data={movies}
            renderItem={({ item }) => (<Theater image={item.avatar} title={item.titulo}/>) }
            keyExtractor={(item)=> item.titulo} 
          />
        </>
      }


    </SafeAreaView>
  );
};

export default App;

