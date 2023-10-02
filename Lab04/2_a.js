import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={{ marginLeft: '-5%', marginRight: '-5%', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button title='->' onPress={() => navigation.navigate('screen2')}></Button>
      </View>
      <View style={{ flex: 2 }}></View>
      <Text style={{
        flex: 1,
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      }}>LOGIN</Text>
      <View style={{ flex: 2 }}></View>

      <View style={{ flex: 1.5, flexDirection: 'row', borderRadius: 5, borderWidth: 2, borderColor: '#fcfaf2' }}>
        <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }}></Image>
        <TextInput
          style={{ flex: 1, padding: 9 }}
          placeholder='Name'></TextInput>
      </View>  
      <View style={{ flex: 0.6 }}></View>
      <View style={{ flex: 1.5, flexDirection: 'row', borderRadius: 5, borderWidth: 2, borderColor:'#fcfaf2'}}>
        <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lock_Icon.svg/768px-Lock_Icon.svg.png' }}></Image>
        <TextInput
          style={{ flex: 1, padding: 9}}
          placeholder='Password'></TextInput>
        <Image style={{marginRight:20, height: 40, width: 40, alignSelf: 'center'}} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png' }}></Image>
      </View>       
      
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity style={{ flex: 1.5, backgroundColor:'black', alignItems:'center', justifyContent:'center', borderRadius:3}}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding:0}}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}></View>
      <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>FORGOT YOUR PASSWORD</Text>    
      <View style={{ flex: 4 }}></View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  

});
