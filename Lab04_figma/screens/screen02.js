import React from 'react';

import { Text, View, FlatList, Image, Button } from 'react-native';

const DATA =[
  {
    id:1,
    title:'Cap chuyen tu cong USB sang PS2',
    url:'https://hacom.vn/media/lib/04-03-2022/daa1d5bbfa49b982db82004f6681dcda.jpg',
    rating:15,
    price:69000,
    discount:39
  },
  {
    id: 2,
    title: 'Cap chuyen tu cong USB sang PS2',
    url: 'https://hacom.vn/media/lib/04-03-2022/daa1d5bbfa49b982db82004f6681dcda.jpg',
    rating: 1,
    price: 91000,
    discount: 40
  },
  {
    id: 3,
    title: 'Cap chuyen tu cong USB sang PS2',
    url: 'https://hacom.vn/media/lib/04-03-2022/daa1d5bbfa49b982db82004f6681dcda.jpg',
    rating: 15,
    price: 169000,
    discount: 39
  },
  {
    id: 4,
    title: 'Cap chuyen tu cong USB sang PS2',
    url: 'https://hacom.vn/media/lib/04-03-2022/daa1d5bbfa49b982db82004f6681dcda.jpg',
    rating: 1,
    price: 99000,
    discount: 40
  },
  {
    id: 5,
    title: 'Cap chuyen tu cong USB sang PS2',
    url: 'https://hacom.vn/media/lib/04-03-2022/daa1d5bbfa49b982db82004f6681dcda.jpg',
    rating: 15,
    price: 119000,
    discount: 1
  },
  {
    id: 6,
    title: 'Cap chuyen tu cong USB sang PS2',
    url: 'https://hacom.vn/media/lib/04-03-2022/daa1d5bbfa49b982db82004f6681dcda.jpg',
    rating: 1,
    price: 99000,
    discount: 49
  },
]

let Item = ({i})=>(
  <View style={{padding:10, width:'50%', flex:1}}>
    <Image style={{width: 'auto', height:120, objectFit:'contain'}} source={{ uri: i.url }}></Image>
    <Text>{i.title}</Text>
    <View style={{ flexDirection: 'row', flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image style={{ flex: 1, height: 30, width: 'auto', objectFit:'contain'}} source={{ uri: 'https://www.pngmart.com/files/23/Stars-PNG.png' }}></Image>
      <Text style={{ flex: 1 }}> ({i.rating})</Text>
    </View>
    <View style={{flexDirection:'row'}}> 
      <Text style={{ fontWeight: 'bold' }}>{i.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </Text>
      <Text> {i.discount} %</Text>
    </View>
  </View>
)

export default function Screen2({ navigation }) {
   return (
      <View>
       <FlatList 
        data={DATA}
        renderItem={({ item }) => <Item i={item}></Item>}
        numColumns={2}
        
       />
       <Button
         title='next'
         onPress={() => navigation.goBack()}
       ></Button>
      </View>
  );
}
