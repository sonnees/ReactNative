import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet,View, Image, Button} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={styles.header}> 
        <View style={styles.header0}>
          <Button title='->' onPress={() => navigation.navigate('screen2')}></Button>
        </View>
        <View style={styles.header1}>
          <Image style={styles.logo} source={{ uri: "https://cdn-icons-png.flaticon.com/512/105/105152.png" }}></Image>
        </View>
        <View style={styles.header2}>
          <text style={{ fontSize: 25, fontWeight:'bold', fontFamily:'sans-serif'}}>GROW</text>
          <text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'sans-serif' }}>YOUR BUSINESS</text>
        </View>
      </View>
      <View style={styles.body}> 
        <View style={styles.body1}>
          <text style={{ fontSize: 13,fontWeight: 'bold', fontFamily: 'sans-serif' }}>We will help you to grow your business using</text>
          <text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'sans-serif' }}>online server</text>
        </View>
        <View style={styles.body2}>
          <Button title='LOGIN' color="#ffa500"></Button>
          <Button title='SIGN UP' color="#ffa500"></Button>
        </View>
        <View style={styles.body3}>
          <text style={{ fontSize: 23, fontWeight: 'bold', fontFamily: 'sans-serif' }}>HOW WE WORK?</text>
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
  header:{
    flex: 1,
  },
  body:{
    flex: 1,
  },
  header0:{
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
  logo: {
    width: 170,
    height: 170,
  },
  body1:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body3: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
  
});

