import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image';
import Color from '../../Shared/Color';
import { useNavigation } from '@react-navigation/native';

function TopHeadlineSlider({newslist}) {
  const navigation=useNavigation();
    
  return (
   <View style={{marginTop:15}}> 
      <FlatList 
       data={newslist}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=>(
        (item.author==null)?"":
        (item.urlToImage==null)?"": <TouchableOpacity 
          onPress={()=>navigation.navigate('read-news',{news:item})}
         style={{width:Dimensions.get('screen').width *0.80}}>
            <Image  source={{uri:item.urlToImage}}
                         style={{height:Dimensions.get('screen').width *0.70,borderRadius:15,marginRight:15}}
                         />
                        <Text  numberOfLines={3} style={{marginTop:10,fontSize:15,fontWeight:'bold'}}>{item.title}</Text>
                        <Text style={{marginTop:3,color:Color.primary}}>{item?.source?.name}</Text>
            
         </TouchableOpacity>
  )}
      />
    </View>
  )
}

export default TopHeadlineSlider;
