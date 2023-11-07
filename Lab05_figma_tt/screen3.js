import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext } from 'react'
import {useNavigation, useRoute} from "@react-navigation/native"
import { MyContext } from './App';

export default function Screen3() {
  let { user, setUser } = useContext(MyContext)
  let route =useRoute();
  let {  size } = route.params;
  let navigation = useNavigation()
  let itemO = {
    id: '' + (size + 1),
    desc:'',
    state:true
  }
  let [item, setItem] = React.useState(itemO)
  let update = (id) => {
    fetch("https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/user/" + id)
      .then(response => {
        if (response.ok)
          return response.json()
      })
      .then(dat => {
        setUser(dat)
        navigation.navigate("Screen2")
      })}
  return (
    <View style={styles.container}>
      <View style={{flex:0.5}}></View>
      <View style={{flex:2}}>
        <TextInput
          placeholder='id'
          style={{ height: 40, borderRadius: 5, borderWidth: 1, paddingLeft: 10 }}
          onChangeText={(value) => setItem({ ...item, id: value })} value={item.id}>
        </TextInput>
        <View style={{ flex: 0.5 }}></View>
        <TextInput
          placeholder='description'
          style={{ height: 40, borderRadius: 5, borderWidth: 1, paddingLeft: 10 }}
          onChangeText={(value) => setItem({ ...item, desc: value })}
          value={item.desc}
          >
          
        </TextInput>
        <View style={{ flex: 0.5 }}></View>
        <TextInput
          placeholder='state'
          style={{height:40, borderRadius: 5, borderWidth: 1, paddingLeft: 10 }}
          onChangeText={(value) => setItem({ ...item, state: value })}
          value={item.state}>
        </TextInput>
      </View>
      <View style={{ flex: 0.5 }}></View>
      <TouchableOpacity style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 100 }}
        onPress={() => {
          user.searchs.push(item);
          fetch('https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/user/' + user.id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
          }).then(oke => {
            update(user.id);
          })
        }}>
        <Text style={{fontSize:15, fontWeight:'bold', textAlign:'center', color:'#fff'}}>OKE</Text>
      </TouchableOpacity>
      <View style={{flex:5}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: "5%",
    paddingRight: "5%"
  },
});
