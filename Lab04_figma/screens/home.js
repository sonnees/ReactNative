import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function Screen1({ navigation }) {
   return (
      <View style={{flex:1}}>
         <Button title="screen1" onPress={() => navigation.navigate('screen1')} />
      </View>
  );
}
