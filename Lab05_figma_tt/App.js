import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Screen1 from "./screen1"
import Screen2 from "./screen2"
import Screen3 from "./screen3"
import Screen4 from "./screen4"
import { createContext, useState } from "react"

export let  MyContext = createContext()

export default function App() {
  let Stack = createStackNavigator();
  let [user, setUser] = useState({})
  return (
    <MyContext.Provider value={{ user ,setUser}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Home' }} />
          <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'ADD' }} />
          <Stack.Screen name="Screen4" component={Screen4} options={{ title: 'UPDATE' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

