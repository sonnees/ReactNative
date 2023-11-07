import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useContext } from 'react'
import {useNavigation} from "@react-navigation/native"
import { MyContext } from './App';

export default function Screen1() {
  let { user, setUser } = useContext(MyContext)
  let navigation = useNavigation()
  let [emailIn, setEmail] = React.useState('')
  let [DATA, setData] = React.useState([])

  fetch("https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/user")
    .then(response=>{
      if (response.ok)
        return response.json()
    })
    .then(dataO=>{
      if(DATA.length==0)
        setData(dataO)
    })

  return (
    <View style={styles.container}>
        <View style={{flex:1}}></View>
        <Image style={{marginTop:20,flex:3,width:'100%', height:'auto', resizeMode:'contain'}} source={{uri:'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg'}}></Image>
        <View style={{flex:0.5}}></View>
        <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center', color:'blue'}}>MANAGE YOUR</Text>
        <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center', color:'blue'}}>TEST</Text>
        <View style={{flex:1}}></View>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Image style={{ left: 10, width: 20, height: 20, resizeMode: 'contain', position: 'absolute' }} source={{ uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2560px-Gmail_Icon_%282013-2020%29.svg.png'}}></Image>
          <TextInput style={{height:40, flex:1, borderRadius:5, borderWidth:1, paddingLeft:40}} placeholder='Enter your name' onChangeText={setEmail}></TextInput>
        </View>
        <View style={{flex:1}}></View>
      { DATA.length == 0 &&<View style={{ flex: 0.7 }}></View>}
      {DATA.length != 0&&
        <TouchableOpacity style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 30 }}
          onPress={
            () => {

              for (let i = 0; i < DATA.length; i++) {
                if (DATA[i].email == emailIn) {
                  setUser(DATA[i]);
                  navigation.navigate("Screen2", { user: DATA[i] })
                }
              }

            }}
        >
          <Text style={{ color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>
        }
      <View style={{flex:1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingLeft:"5%",
    paddingRight:"5%"
  },
});
