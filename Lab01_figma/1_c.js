import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Button} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button title='<-' onPress={() => navigation.navigate('screen2')}></Button>
          <Button title='->' onPress={() => navigation.navigate('screen4')}></Button>
        </View>
        <View style={styles.header1}>
          <text style={{ fontSize: 60, fontWeight: 'bold', fontFamily: 'sans-serif' }}>CODE</text>
        </View>
        <View style={styles.header2}>
          <text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'sans-serif' }}>VERIFICATION</text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.body1}>
          <text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter ontime password sent on</text>
          <text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'sans-serif' }}>++849092605798</text>
        </View>
        <View style={styles.body2}>
          <View style={styles.body21}></View>
          <View style={styles.body21}></View>
          <View style={styles.body21}></View>
          <View style={styles.body21}></View>
          <View style={styles.body21}></View>
          <View style={styles.body21}></View>
        </View>
        <View style={styles.body3}>
          <Button title='VERTIFY CODE' color="#ffa500"></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F4F6',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  header0: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header1: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  header2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body1: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body2: {
    flexDirection:'row',
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  body3: {
    flex: 4,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  body21:{
    borderWidth: 1,
    flex: 1
  }

});
