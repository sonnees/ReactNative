import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Screen1 from './screen1' 
export default function App() {
  let Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{title:"App"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

