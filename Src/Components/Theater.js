import React from 'react';
import { View, Image, Text } from 'react-native';

import { Styles } from '../Styles/TheaterStyle';

function Theater(props) {
  return(
    <View style={Styles.Card}>
        <Image 
          source={{uri : props.image }} 
          style={Styles.Image} 
          resizeMode='contain'
        />

        <Text style={Styles.TextCard}>{props.title}</Text>
    </View>
  );
}

export default Theater;