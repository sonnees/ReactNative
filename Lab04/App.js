import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import screen1 from "./2_a"
import screen2 from "./2_b"
import screen3 from "./2_c"
import screen4 from "./2_d"

let  stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="screen1" component={screen1} options={{headerShown:false}} ></stack.Screen>
        <stack.Screen name="screen2" component={screen2} options={{ headerShown: false }} ></stack.Screen>
        <stack.Screen name="screen3" component={screen3} options={{ headerShown: false }} ></stack.Screen>
        <stack.Screen name="screen4" component={screen4} options={{ headerShown: false }} ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

