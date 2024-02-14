import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Image, ScrollView, Share, Text, View } from 'react-native'
import Color from '../Shared/Color';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


function Readnews() {
    const news=useRoute().params.news;
    const navigation=useNavigation();
    const sharenews=()=>{
        Share.share({
            message:news.title
        })
    }

    
  return (
      <ScrollView  style={{backgroundColor:'#fff', flex:1}}>
        <View style={{marginTop:10,marginBottom:10,display:'flex' ,flexDirection:'row',justifyContent:'space-between' }}>
        
         <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="back" size={25} color="black" />
         </TouchableOpacity>
          <TouchableOpacity onPress={()=>sharenews()}>
          <Octicons name="share-android" size={25} color="black" />
          </TouchableOpacity>
        </View>
         <Image source={{uri:news.urlToImage}}  style={{height:300,width:'100%',borderRadius:10}}/>
         <Text style={{marginTop:10, color:Color.primary,fontSize:18}}>{news.source.name}</Text>
         <Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>{news.title}</Text>
         <Text style={{fontSize:16,marginTop:8,color:Color.gray,fontWeight:'bold',
           lineHeight:25}}>{news.description}</Text>

        <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
        <Text style={{marginTop:10, color:Color.primary,fontSize:18,fontWeight:'bold'} }  >
        Read More
           </Text>
        </TouchableOpacity>

      </ScrollView>
    
  )
}

export default Readnews
