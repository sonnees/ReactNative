import React from 'react';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import { MyContext } from '../App';
export function BodyList() {
  const DATA =[
    {
      id: '0',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '1',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '2',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '3',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '4',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '5',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '6',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },
    {
      id: '7',
      title: 'Name san pham',
      nameShop: 'The gioi do choi',
      img: 'https://bizflyportal.mediacdn.vn/bizflyportal/media/1/2020/03/17/00/43/01-15843589933381.jpg',
    },

  ];

  const Item = ({i}) =>(
    <View style={{flexDirection:'row', flex:1, padding:5, borderTopWidth:1}}>
     
      <Image style={{ flex: 1, height:80,width:'auto', objectFit:'contain'}} source={{uri:i.img}}></Image>
      <View style={{ flex: 2, marginLeft:10}}>
        <Text style={{ fontWeight: 'bold' }}>{i.title}</Text>
        <View style={{flexDirection:'row', alignItems:'flex-end'}}>
          <Text style={{fontSize:12}}>Shop </Text>
          <Text style={{color:'red'}}>{i.nameShop}</Text>
        </View>
      </View>
      <View style={{ flex: 1, padding:13}}>
        <TouchableOpacity style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center'}}
          onPress={() => setCount(++count)}
        >
          <Text style={{ color: 'white'}}>Chat</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

  let { count, setCount } = React.useContext(MyContext);
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) =><Item i={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

