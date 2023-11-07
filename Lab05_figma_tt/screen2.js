import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import { MyContext } from './App';


export default function Screen2() {
  let navigation = useNavigation()
  let { user, setUser } = useContext(MyContext)

  let update= (id)=>{
    fetch("https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/user/"+id)
    .then(response=>{
      if (response.ok)
        return response.json()
    })
    .then(dat=>{
      setUser(dat)
      setUserIn(dat.searchs)
    })
  }

  let [userO, setUserO] = useState(user.searchs)
  let [valueSearch, setValueSearch] = React.useState('')
  let [userIn, setUserIn] = React.useState(user.searchs)
  
  if (!(userO === user.searchs)){
    setUserIn(user.searchs)
    setUserO(user.searchs)
  }

  let Item = ({i}) => (
    <View style={{flex:1, height:30, backgroundColor:'#6AEBF9', marginBottom:10, borderRadius:10, justifyContent:'center'}}>
      <Image style={{ left: 10, width: 20, height: 20, resizeMode: 'contain', position: 'absolute' }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/5290/5290058.png'}}></Image>
      <TouchableOpacity style={{ flex: 1, position: 'absolute', right: 10, zIndex:99}}
      onPress={()=>{

        for (let j = 0; j < userIn.length; j++) 
          if (userIn[j].id === i.id)
            userIn.splice(j, 1);
          
      user.searchs = userIn

      fetch('https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/user/'+user.id, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(user)
      }).then(oke=>{
        update(user.id);
      })
      
    }}
      >
        <Image style={{ width: 20, height: 20, resizeMode: 'contain'}} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png' }}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, position: 'absolute', right: 40, zIndex: 99 }}
        onPress={() => {
          navigation.navigate("Screen4", { nameStask: "Update", id: i.id, user: user })
        }}
      >
        <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={{ uri:'https://icon-library.com/images/edit-icon-image/edit-icon-image-1.jpg'}}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1}}>
        <Text style={{flex:1, padding:20, marginLeft:40}}>{i.desc}</Text>
      </TouchableOpacity>
    </View>

  );

  React.useEffect(
    ()=>{
      let temp = user.searchs.filter(i => {
        return i.desc.includes(valueSearch)
      })
      if (valueSearch != "")
        setUserIn(temp)
      else setUserIn(user.searchs)
    }, [valueSearch]
  )

  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Image style={{left:10,width:20, height:20, resizeMode:'contain', position:'absolute'}} source={{uri:'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg'}}></Image>
          <TextInput style={{height:40, flex:1, borderRadius:5, borderWidth:1, paddingLeft:40}} placeholder='Search'
            onChangeText={
              setValueSearch
            }
          ></TextInput>
      </View>
      <View style={{flex:1}}></View>
      <FlatList style={{flex:6}}
        data ={userIn}
        renderItem={({item})=> <Item i={item}></Item>}

      >
      </FlatList>
      <TouchableOpacity style={{borderRadius:1000,flex:1, backgroundColor:'blue', justifyContent:'center', alignItems:'center', width:'30%', alignSelf:'center'}}
        onPress={() => {
          navigation.navigate("Screen3", { nameStask: "Add", size: userIn.length, user: user })
        }}
      >
        <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>+</Text>
      </TouchableOpacity>
      <View style={{flex:3}}></View>
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
