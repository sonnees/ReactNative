import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={{ marginLeft: -20, marginRight: -20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title='<-' onPress={() => navigation.navigate('screen4')}></Button>
        <Button title='->' onPress={() => navigation.navigate('screen6')}></Button>
      </View>
      <View style={{ flex: 1 }}></View>
      <Text style={{
        flex: 2,
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      }}>REGISTER</Text>

      <TextInput
        style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9, borderRadius: 5 }}
        placeholder='Name'></TextInput>
      <View style={{flex:0.4}}></View>

      <TextInput
        style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9, borderRadius: 5 }}
        placeholder='Phone'></TextInput>
      <View style={{ flex: 0.4 }}></View>

      <TextInput
        style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9, borderRadius: 5 }}
        placeholder='Email'></TextInput>
      <View style={{ flex: 0.4 }}></View>

      <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '#9ac2b9', borderRadius: 5 }}>
        <TextInput
          style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9}}
          placeholder='Password'></TextInput>
        <Image style={{marginRight:20, height: 40, width: 40, alignSelf: 'center', backgroundColor: '#9ac2b9' }} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png' }}></Image>
      </View>
      
      <View style={{ flex: 0.4 }}></View>

      <TextInput
        style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9, borderRadius: 5 }}
        placeholder='Brithdate'></TextInput>
      <View style={{ flex: 0.4 }}></View>

      
      <View style={{ flex: 1, flexDirection:'row'}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center'}}>
          <input type="radio" />
          <Text>Male</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <input type="radio" />
          <Text>Female</Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}></View>
      <Button 
        style={{ flex: 1 }}
        color='red'
        title='REGISTER'
      >
      </Button>
      <View style={{ flex: 0.4 }}></View>
      <Text style={{ flex: 1, fontWeight: 'bold', textAlign:'center'}}>When you agree to terns and condition</Text>    
      <View style={{ flex: 2 }}></View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F4F6',
    paddingLeft: 20,
    paddingRight: 20,
  },
  

});
