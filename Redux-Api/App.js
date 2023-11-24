import { StyleSheet, View } from 'react-native';
import { Provider} from 'react-redux'
import { Store } from './redux/store';
import Component_View from './component_View';
import Component_Set from './component_Set';

export default function Screen1() {
     
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Component_Set></Component_Set>
        <Component_View />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
