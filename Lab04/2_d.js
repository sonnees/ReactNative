import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity,Image } from 'react-native';



export default function App() {
  
  let [quanlity,setQuanlity] = useState(1);
  let [priceTemp, setPriceTemp] = useState('141.800'+' d')
  let navigation = useNavigation()
  return (
    
    <View style={styles.container} >
      <View style={{ marginLeft: '-3%', marginRight: '-3%', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Button title='<-' onPress={() => navigation.navigate('screen3')}></Button>
       
      </View>
      
      <View style={{ flex: 2.5, flexDirection:'row'}}>
        <Image style={{flex:1}} source={{ uri:'https://nhasachquangloi.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/b/sbgk20-l05-657-1.jpg'}}></Image>
        <View style={{flex:0.1}}></View>
        <View style={{ flex: 2 ,justifyContent: 'space-around' }}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Nguyen ham tich phan va ung dung</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Cung cap boi tiki trading</Text>

          <TextInput style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }} value={priceTemp}></TextInput>

          <Text style={{ fontSize: 12, fontWeight: 'bold', textDecorationStyle: 'solid' }}><del>141.800 d</del></Text>
          <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={{ flex: 1,flexDirection: 'row' ,alignItems:'center'}}>
              <TouchableOpacity 
                onPress={() => { setQuanlity(quanlity - 1); setPriceTemp(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(140800 * (quanlity - 1))) }} 
                style={{ backgroundColor:'#bbbbbb', height:20, width:20, justifyContent:'center', alignItems:'center'}}>-</TouchableOpacity>
              <View style={{ flex: 0.05 }}></View>
              <TextInput id='quanlity' style={{ width:16, fontSize: 15, fontWeight: 'bold' }} value={quanlity}></TextInput>
              <View style={{ flex: 0.05 }}></View>
              <TouchableOpacity 
                onPress={() => { setQuanlity(quanlity + 1); setPriceTemp(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(140800*(quanlity+1)))}} 
                style={{ backgroundColor:'#bbbbbb', height:20, width:20, justifyContent:'center', alignItems:'center'}}>+</TouchableOpacity>
            </View>
            <Text style={{color:'blue', fontWeight:'bold'}}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.4 }}></View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Ma giam gia da luu</Text>
        <View style={{ flex: 0.1 }}></View>
        <Text style={{ fontSize: 11, fontWeight: 'bold' , color:'blue'}}>Xem tai day</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity style={{borderRadius:2, flex:2, borderWidth:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <Image style={{height:20, width: 50}} source={{ uri:'https://tingiasoc.com/wp-content/uploads/2020/03/ma-giam-gia-shopee-tgs.png'}}></Image>
          <View style={{ flex: 0.1 }}></View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ma giam gia</Text>
        </TouchableOpacity>
        <View style={{ flex: 0.3 }}></View>

        <TouchableOpacity style={{ borderRadius: 2, flex: 1, backgroundColor:'blue', justifyContent:'center', alignItems:'center' }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}> Ap dung</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.4 }}></View>

      <View style={{ flex: 0.2, backgroundColor: "#bbbbbb", marginLeft: '-5%', marginRight: '-5%' }}></View>
      <View style={{ flex: 1 , flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> Ban co phieu qua tang Tiki/Got it/ Urbox?</Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color:'blue' }}> Nhap tai day?</Text>
      </View>

      <View style={{ flex: 0.2, backgroundColor: "#bbbbbb", marginLeft: '-5%', marginRight: '-5%' }}></View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Tam tinh</Text>
        <TextInput style={{ width: 100, fontSize: 20, fontWeight: 'bold', color: 'red' }} value={priceTemp}></TextInput>
      </View>

      <View style={{ flex: 2, backgroundColor: "#bbbbbb", marginLeft: '-5%', marginRight: '-5%' }}></View>
      
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#bbbbbb'}}> Thanh tien</Text>
        <TextInput style={{ width: 100, fontSize: 20, fontWeight: 'bold', color: 'red' }} value={priceTemp}></TextInput>
      </View>

      <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'red', borderRadius:3}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> TIEN HANH DAT HANG</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingLeft: '3%',
    paddingRight: '3%',
  }
  

});
