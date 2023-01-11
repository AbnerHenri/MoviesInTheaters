import React from 'react';
import { View, Image, Text } from 'react-native';

import { Styles } from '../Styles/TheaterStyle';

function Theater(props) {
  return(
    <View style={Styles.Card}>
        <Image source={{uri : props.image }} style={{width : 250, height : 250}} />
        <Text>{props.title}</Text>
    </View>
  );
}

export default Theater;