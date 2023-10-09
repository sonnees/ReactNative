import React, {useContext } from 'react';
import {useNavigation} from "@react-navigation/native"
import { StyleSheet, Text, View, TouchableOpacity, Image,Button } from 'react-native';
import { MyContext } from "./App"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

export default function Screen2() {
  let navigation = useNavigation();
  let { img, setImg } = useContext(MyContext)
  return (
    <View style={styles.container}>
      <View style={{flex:0.1}}></View>
      <View style={{flex:2, flexDirection:'row'}}>
        <Image style={{ flex: 1.5, height: '100%', width: 'auto', resizeMode: 'center', }} source={{ uri: img }}></Image>
        <View style={{ flex: 0.1 }}></View>
        <Text style={{ flex: 3, fontWeight: 'bold', fontSize: 17, alignItems: 'center' }}>Điện Thoại Vsmart Joy 3  Hàng chính hãng</Text>
      </View>
      <View style={{ flex: 0.3 }}></View>
      <View style={{ flex: 8, background: 'linear-gradient(0deg,#00d4ff,#00fcff', marginLeft: '-5%', marginRight: '-5%', padding:"5%"}}>
        <Text style={{fontWeight:'bold', fontSize:15}}>Chọn một màu bên dưới</Text>
        <View style={{ flex: 0.2 }}></View>
        <View style={{ flex: 5, alignItems: 'center', justifyContent:'space-around'}}>
          <TouchableOpacity style={{ width: '30%', height: '20%', backgroundColor:'white'}}
            onPress={() => setImg('https://cdn.tgdd.vn/Products/Images/42/226436/vsmart-live-4-trang-200x200.jpg')}
          />
          <TouchableOpacity style={{ width: '30%', height: '20%', backgroundColor: 'red' }}
            onPress={() => setImg('https://bizweb.dktcdn.net/100/422/925/collections/sua-chua-dien-thoai-vsmart-star-quan-2-a1368.jpg?v=1646451555300')}
          />
          <TouchableOpacity style={{ width: '30%', height: '20%', backgroundColor: 'black' }}
            onPress={() => setImg('https://p-vn.ipricegroup.com/uploaded_51e58ab4ae082fb2f2da011459102836.jpg')}
          />
          <TouchableOpacity style={{ width: '30%', height: '20%', backgroundColor: '#86abc8' }}
            onPress={() => setImg('https://24hstore.vn/images/products/2021/04/01/large/vsmart-live-4-black.jpg')}
          />
        </View>
        <View style={{ flex: 0.3 }}></View>
        <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
          onPress={()=> navigation.navigate('screen1')}
        >
          <Text style={{ fontWeight: 30, fontWeight: 'bold', color: 'white' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    paddingLeft:'5%',
    paddingRight:'5%',
  }
});
