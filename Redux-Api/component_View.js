import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { add,edit,del } from './redux/action';
import { useState, useId } from 'react';


let Component_View = ({ todojob, addData, delData, editData }) => {
  
  
  let [input, setInput] = useState("")

  let Item = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text>{item.todo}</Text>
      <View style={{ marginLeft: 10 }}></View>
      <TouchableOpacity
        onPress={() => {
          delData(item.id)
        }}
      >
        <Text>delete</Text>
      </TouchableOpacity>
      <View style={{ marginLeft: 10 }}></View>
      <TouchableOpacity
        onPress={() => {
          editData(item.id, input)
        }}
      >
        <Text>edit</Text>
      </TouchableOpacity>
    </View>
  )
  if (todojob != null)
    return (
      <View style={styles.container}>
        <FlatList  style ={{flex:1}}
          data={todojob}
          renderItem={Item}
        ></FlatList>

       <View style={{flex:0.2, flexDirection:'row'}}>
          <TextInput style={{ borderWidth: 1 }} placeholder='enter input' onChangeText={setInput}></TextInput>
          <TouchableOpacity
            onPress={() =>{
              addData(input)
            }}
          >
            <Text>add</Text>
          </TouchableOpacity>
       </View>
        <TouchableOpacity style={{backgroundColor:'red', margin:20}}
          onPress={() => {
              let obj = {
                id:1,
                todojob: todojob
              }
              fetch("https://653f68399e8bd3be29e07f8f.mockapi.io/api/v1/shop/1", {
                method: 'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(obj)
              })
              .then(oke => alert(oke.ok))
          }}
        >
          <Text>Update to API</Text>
        </TouchableOpacity>
        <View style={{ flex: 3 }}></View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let mapStateToProps = (state) => ({ todojob: state.todojob })
const mapDispatchToProps = (dispatch) => ({
  addData: (news) => dispatch(add(news)),
  delData: (id) => dispatch(del(id)),
  editData: (id, news) => dispatch(edit(id, news))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component_View)