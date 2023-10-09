import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={{ marginLeft:-20,marginRight:-20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title='<-' onPress={() => navigation.navigate('screen3')}></Button>
        <Button title='->' onPress={() => navigation.navigate('screen5')}></Button>
      </View>
      <View style={{
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          fontFamily: 'sans-serif',
          fontWeight: 'bold' 
        }}>LOGIN</View>

      <View style={{ 
          flex: 1, 
          }}>
            <TextInput
              style={{ flex: 1, backgroundColor:'#9ac2b9', padding:9, borderRadius:5}}
              placeholder='Email'></TextInput>
            <View style={{flex:1}}></View>
            <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '#9ac2b9', borderRadius: 5 }}>
              <TextInput
                style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9 }}
                placeholder='Password'></TextInput>
              <Image style={{ marginRight: 20, height: 40, width: 40, alignSelf: 'center', backgroundColor: '#9ac2b9' }} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png' }}></Image>
            </View>
            <View style={{flex:1}}></View>
      </View>

      <View style={{ flex: 2 }}>
        <Button title='LOGIN' color="red" style={{ flex: 1 }}></Button>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontWeight:'bold'}}>When you agree to terms and condrons</Text>
          <Text style={{ color:'#1565f7' }}>For got your password</Text>
          <Text style={{ fontWeight: 'bold' }}>Or login with</Text>
        </View>
        <View style={{ flex: 1, flexDirection:'row'}}>
          <Image style={{ flex: 1, borderRadius:15 }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/2048px-Facebook_logo_36x36.svg.png" }}></Image>
          <Image style={{ flex: 1, borderRadius: 15 }} source={{ uri: "data:image/png;base64,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" }}></Image>
          <Image style={{ flex: 1, borderRadius: 15 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0GVd31ZFn2rnuKtmVRGf9ysXeLJz14NkXN2TsiT9XGPTvaX3ffp-s17xiyrsi1JAhvo&usqp=CAU" }}></Image>
        </View>
        <View style={{ flex: 1.5 }}></View>
      </View>
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
