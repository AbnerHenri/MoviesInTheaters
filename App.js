import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Styles } from './Src/Styles/Page';

const App = () => {
  
  return (
    <SafeAreaView style={Styles.Page}>
      <StatusBar hidden={true}/>


    </SafeAreaView>
  );
};


export default App;
