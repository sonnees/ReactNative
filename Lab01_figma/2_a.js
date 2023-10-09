import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={{ marginLeft: -20, marginRight: -20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title='<-' onPress={() => navigation.navigate('screen5')}></Button>
        <Button title='->' onPress={() => navigation.navigate('screen7')}></Button>
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
      <Button 
        style={{ flex: 1}}
        color='black'
        title='REGISTER'
      >
      </Button>
      <View style={{ flex: 1 }}></View>
      <Text style={{ flex: 1, fontWeight: 'bold', textAlign:'center', fontSize:25}}>CREATE ACCOUNT</Text>    
      <View style={{ flex: 4 }}></View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
    paddingLeft: 20,
    paddingRight: 20,
  },
  

});
