
import { Image, StyleSheet, Text, View} from 'react-native';

export function Footer() {
  return (
    <View style={styles.container}>
        <Image style={{height:20, width:20, objectFit:'contain'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/2976/2976215.png'}}></Image>
        <Image style={{height:20, width:20, objectFit:'contain'}} source={{uri:'https://cdn2.iconfinder.com/data/icons/ui-kit-developer-glyphs/16/GlyphIcons-Home-512.png'}}></Image>
        <Image style={{height:20, width:20, objectFit:'contain'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/150/150519.png'}}></Image>
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
