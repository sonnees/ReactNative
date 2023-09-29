import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screen1 from './1_a';
import screen2 from './1_b';
import screen3 from './1_c';
import screen4 from './1_d';
import screen5 from './1_e';
import screen6 from './2_a';
import screen7 from './2_b';

let Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="screen1" component={screen1} options={{ headerShown: false }} />
                <Stack.Screen name="screen2" component={screen2} options={{ headerShown: false }} />
                <Stack.Screen name="screen3" component={screen3} options={{ headerShown: false }} />
                <Stack.Screen name="screen4" component={screen4} options={{ headerShown: false }} />
                <Stack.Screen name="screen5" component={screen5} options={{ headerShown: false }} />
                <Stack.Screen name="screen6" component={screen6} options={{ headerShown: false }} />
                <Stack.Screen name="screen7" component={screen7} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}