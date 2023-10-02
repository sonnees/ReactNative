import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity,C } from 'react-native';
import { CheckBox } from 'react-native-elements';

const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_-+=<>?';


export default function App() {
  
  const navigation = useNavigation();
  let [len,setLen] = useState(0)
  let [check1, setCheck1] = useState(false)
  let [check2, setCheck2] = useState(false)
  let [check3, setCheck3] = useState(false)
  let [check4, setCheck4] = useState(false)

    
  function randomPass(c1, c2,c3,c4) {
    console.log(c1 + "" + c2 + " " + c3 + "" + c4)
    document.getElementById('pass').value = "";
    let l = parseInt(document.getElementById('lengthP').value)
    if (l <= 0) return;
    let allChars = "";
    let pass = "";

    if (c1) allChars += lowerCaseChars;
    if (c2) allChars += upperCaseChars;
    if (c3) allChars += numbers;
    if (c4) allChars += specialChars;
    console.log(allChars)
    for (let i = 0; i < l; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      pass += allChars.charAt(randomIndex);
    }
    console.log(pass)
    document.getElementById('pass').value = pass;
  }  

  return (
    <View style={styles.container} >
      <View style={{ marginLeft: '-8%', marginRight: '-8%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title='<-' onPress={() => navigation.navigate('screen2')}></Button>
        <Button title='->' onPress={() => navigation.navigate('screen4')}></Button>
      </View>

      <View style={{flex:2.5, justifyContent:'center', alignItems:'center'}}> 
        <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>PASSWORD</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>GENERATOR</Text>
      </View>

      <TextInput id='pass' style={{ flex: 0.7, fontSize:17, backgroundColor:'#4d10bd', padding:12, color:'white'}} placeholder='password show here'

        ></TextInput>
      <View style={{ flex: 0.7 }}></View>

      <View style={{ flex: 0.6, flexDirection: 'row' }}>
        <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>Password length</Text>
        <TextInput id='lengthP' style={{ flex: 1, backgroundColor: 'white', padding: 10, width: 50, fontSize: 17, }}
          onChange={() => { setLen(document.getElementById('lengthP').value); randomPass(check1, check2, check3, check4)}}
          value={len}
        ></TextInput>
      </View>
      <View style={{ flex: 0.4 }}></View>
      <View style={{ flex: 4, flexDirection:'row'}}>
        <View style={{flex:9}}>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>Include lower case letters</Text>
          <View style={{ flex: 0.3 }}></View>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>include upcase letters</Text>
          <View style={{ flex: 0.3 }}></View>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>include number</Text>
          <View style={{ flex: 0.3 }}></View>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>include special symbol</Text>
          <View style={{ flex: 0.3 }}></View>
        </View>
        <View style={{ flex: 2 }}>
          <CheckBox 
            checked={check1}
            onPress={() => { setCheck1(!check1); randomPass(!check1, check2, check3, check4); }}
          ></CheckBox>
          <View style={{ flex: 0.3 }}></View>

          <CheckBox  
            checked={check2}
            onPress={() => { setCheck2(!check2);; randomPass(check1, !check2, check3, check4) }}
          ></CheckBox>
          <View style={{ flex: 0.3 }}></View>

          <CheckBox
            checked={check3}
            onPress={() => { setCheck3(!check3);; randomPass(check1, check2, !check3, check4) }}
          ></CheckBox>
          <View style={{ flex: 0.3 }}></View>

          <CheckBox 
            checked={check4}
            onPress={() => { setCheck4(!check4);; randomPass(check1, check2, check3, !check4) }}
          ></CheckBox>
          <View style={{ flex: 0.3 }}></View>
        </View>
      </View>
      <View style={{ flex: 0.3 }}></View>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#7265ad', borderRadius:5}}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue',
    paddingLeft: '5%',
    paddingRight: '5%',
  }
  

});
