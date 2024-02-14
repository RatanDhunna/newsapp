import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

function HeadlineList({newslist}) {
    //  console.log(newslist[0]);
    const navigation=useNavigation();
  return (
    <View >
        <FlatList 
        data={newslist}
        
         renderItem={({item})=>(
            (item.author==null)?"":
            (item.urlToImage==null)?"": <View >
                <View style={{height:1, backgroundColor:Color.lightGray, marginTop:20}}></View>
            <TouchableOpacity  style={{marginTop:15, display:'flex',
                                       flexDirection:'row'}} 
                                       onPress={()=>navigation.navigate('read-news',{news:item})}>
                <Image 
                 source={{uri:item.urlToImage}}
                 style={{height:150, width:150, borderRadius:10}}
                />
                 <View View style={{marginRight:150, marginLeft:10}}>
                   <Text style={{color:Color.primary }}>{item?.source?.name}</Text>
                   <Text numberOfLines={4} style={{ fontSize:15, fontWeight:'bold'}}> {item.title}</Text>
                 </View>


            </TouchableOpacity>
            </View>
         )}

        >

        </FlatList>
    </View>
  )
}

export default HeadlineList
