import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Incre, Decre } from './redux/action';
import React from 'react';
import { connect } from 'react-redux';


let Component3 = ({ count, increment, decrement }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1, width: 45, height: 45, }} onPress={increment}>
        <Image style={{ width: 40, height: 40, resizeMode: 'contain', flex: 1 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flat_plus_icon.svg/1024px-Flat_plus_icon.svg.png' }} />
      </TouchableOpacity>
      <Text style={{ marginLeft: 10, marginRight: 10 }}> {count} </Text>
      <TouchableOpacity style={{ flex: 1, width: 45, height: 45, }} onPress={decrement}>
        <Image style={{ width: 45, height: 45, resizeMode: 'contain', flex: 1 }} source={{ uri: 'https://icon-library.com/images/minus-icon-png/minus-icon-png-0.jpg' }}></Image>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

let mapStateToProps = (type) => ({ count: type.count })
let mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(Incre()),
  decrement: () => dispatch(Decre()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Component3)
