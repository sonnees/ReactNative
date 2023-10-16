
import { Image, StyleSheet, Text, View} from 'react-native';

export function Header() {
  return (
    <View style={styles.container}>
        <Image style={{height:20, width:20, objectFit:'contain'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271218.png'}}></Image>
        <Text style={{color:'white'}}>Chat</Text>
        <Image style={{height:20, width:20, objectFit:'contain'}} source={{uri:'https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png'}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCFF',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-around'
  },
});
