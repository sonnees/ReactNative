import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Button title='<-' onPress={() => navigation.navigate('screen1')}></Button>
          <Button title='->' onPress={() => navigation.navigate('screen3')}></Button>
        </View>
        <View style={styles.header1}>
          <Image style={styles.logo} source={{ uri: "https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png" }}></Image>
        </View>
        <View style={styles.header2}>
          <text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'sans-serif' }}>FORGET</text>
          <text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'sans-serif' }}>PASSWORD</text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.body1}>
          <text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'sans-serif' }}>provide your account's email for which you</text>
          <text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'sans-serif' }}>want to reset your password</text>
        </View>
        <View style={styles.body2}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
              <Image style={styles.logoGmail} source={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png" }}></Image>
              <Text style={{ justifyContent: 'center', fontWeight: 'bold' }}>Gmail</Text>
            </View>
            <TextInput
            style={{ flex: 3}}

            ></TextInput>
        </View>
        <View style={styles.body3}>
          <Button title='LOGIN' color="#ffa500"></Button>
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
  logo: {
    width: 170,
    height: 170,
  },
  body1: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body2: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#cbbeb5'
  },
  body3: {
    flex: 4,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  logoGmail:{
    width: 25,
    height: 25,
  }

});
