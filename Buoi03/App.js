import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.header}>
        <h1>Header left here</h1>
      </view>
      <view style={styles.body}>
        <h1 style={styles.red}>Body here</h1>
      </view>
      <view style={styles.footer}>
        <h1>Footer here</h1>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 1,
    backgroundColor:'green',
    justifyContent:'space-around',
    alignItems:'center'
  },
  body: {
  flex: 1,
  backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: 'black',
  },
  red_center:{
    flex: 1,
    color:'red'
  }
});
