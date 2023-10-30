import React from 'react';
import { Image, Text, TouchableOpacity, Button, View} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import screen1 from "./screens/screen01.js"
import screen2 from "./screens/screen02.js"
import home from "./screens/home.js"

export let MyContext = React.createContext(); 

export default function App() {  
  let [count, setCount] = React.useState(0)
  let Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
   return (
     <MyContext.Provider value={{ count, setCount }}>
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name='home' component={home}
             options={{ title:'Home'}}
           />
           <Stack.Screen name='screen1' component={screen1}
             options={{
               headerTitle: 'Chat',
               headerTitleStyle:{color:'white'},
               headerStyle: { backgroundColor: '#CCCCFF', alignSelf:'center'},
               headerTitleAlign:'center',
               headerRight: () => (
                 <TouchableOpacity style={{}}
                 >  
                  <Image style={{height:20, width:20,marginRight:20, objectFit:'contain'}} source={{uri:'https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png'}}></Image>
                 </TouchableOpacity>
               ),
             }}
           />
           <Stack.Screen name='screen2' component={screen2} 
           options={{
             title: 'Mua hang',
            } }
           />
         </Stack.Navigator>
       </NavigationContainer>
     </MyContext.Provider>
  );
}
