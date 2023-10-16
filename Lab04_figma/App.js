import React from 'react';
import { Image, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import screen1 from "./screens/screen01.js"
import screen1 from "./screens/screen02.js"

let Stack = createStackNavigator();

export let MyContext = React.createContext();

export default function App() {  
  let [count, setCount] = React.useState(0)

   return (
     <MyContext.Provider value={{ count, setCount }}>
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name='screen1' component={screen1} options={{
            title:'Mua hang',
             headerRight: () => (
               <TouchableOpacity style={{ backgroundColor: 'red' }}
                 onPress={() => {
                   setCount((c)=>c+1);
                   console.log(count)
                 }}
               ><Text>Count</Text></TouchableOpacity>
             )
           }} />
         </Stack.Navigator>
       </NavigationContainer>
     </MyContext.Provider>
  );
}
