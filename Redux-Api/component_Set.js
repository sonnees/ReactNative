import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { set } from './redux/action';

let Component_Set = ({ setData }) => {
  let fetchData = () => {
    fetch("https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/shop/1")
      .then(response => response.json())
      .then(data => {
        setData(data); 
      })
  };

  if(setData.length!=0){
    return (
      <TouchableOpacity onPress={fetchData}>
        <Text>Load</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(set(data))
});

export default connect(null, mapDispatchToProps)(Component_Set);
