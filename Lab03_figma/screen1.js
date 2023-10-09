import React, {useContext } from 'react';
import {useNavigation} from "@react-navigation/native"
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MyContext } from "./App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

export default function Screen1() {
  
  let { img, setImg } = useContext(MyContext)
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3 }}></View>
      <Image style={{ flex: 9 }} source={{ uri: img }}></Image>
      <View style={{flex:0.4}}></View>
      <Text style={{flex:1,fontWeight:'bold', fontSize:15, alignItems:'center'}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flex:1, flexDirection:'row'}}>
        <Image style={{flex:1}} source={{uri:'https://www.pngmart.com/files/23/Stars-PNG.png'}}></Image>
        <Text style={{flex:1, textAlign:'center', justifyContent:'center', fontSize:16, alignSelf:'center'}}> (Xem 823 danh gia)</Text>
      </View>
      
      <View style={{flex:1, flexDirection:'row', alignItems:'flex-end'}}>
        <Text style={{flex:1, fontWeight:'bold', fontSize:20}}>1.790.000 d</Text>
        <Text style={{ flex: 1, fontSize: 18}}><del>1.790.000 d</del></Text>
      </View>
      <View style={{flex:0.3}}></View>
      <View style={{flex:1, flexDirection:'row'}}>
        <Text style={{fontWeight:'bold', fontSize:15, color:'red', alignSelf:'center', marginRight:'10px'}}>Ở ĐẦU RẺ HƠN HOÀN TIỀN</Text>
        <FontAwesomeIcon icon={faQuestionCircle} size='2x' color='blue' />
      </View>
      <View style={{ flex: 0.3 }}></View>
      <TouchableOpacity style={{flex:1, flexDirection:'row', borderRadius:5, borderWidth:2, justifyContent:'center', alignItems:'center'}}
        onPress={() => navigation.navigate('screen2')}
      >
        <Text style={{ marginRight:'-20px' , textAlign: 'center', fontSize: 16, flex: 1, fontWeight: 'bold' }}>4 MÀU - CHỌN MÀU</Text>
        <FontAwesomeIcon icon={faGreaterThan} style={{marginRight:'10px'}} />
      </TouchableOpacity>
      <View style={{flex:1}}></View>
      <TouchableOpacity style={{flex:1, backgroundColor:'red', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontWeight:25, fontWeight:'bold', color:'white'}}>CHỌN MUA</Text>
      </TouchableOpacity>
      <View style={{flex:1}}></View>
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
