import * as React from 'react';
import {Text, View} from 'react-native';

import { BodyList } from '../components/list'

export default function Screen1({ navigation }) {
   return (
      <View style={{flex:1}}>
       <Text style={{ flex: 1, padding: 20 }}>Ban co thac mac voi san pham vua xem. Dung ngai chat hoi shop</Text>
       <BodyList></BodyList>
      </View>
  );
}
