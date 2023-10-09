import { useState, createContext, useContext } from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import screen1  from "./screen1"
import screen2 from "./screen2"

let Stack = createStackNavigator();
export let MyContext = createContext();

export default function App(){
  let [img, setImg] = useState('https://24hstore.vn/images/products/2021/04/01/large/vsmart-live-4-black.jpg')
  return(
    <MyContext.Provider value={{ img , setImg}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="screen1" component={screen1} options={{ headerShown: false }} />
          <Stack.Screen name="screen2" component={screen2} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
} 

