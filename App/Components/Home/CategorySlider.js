import React, { useState } from 'react'
import { StyleSheet,FlatList, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color';

function CategorySlider({SelectCategory}) {
    const [active,setactive]=useState(1);
    const categoryList=[
         {
            id:1,
            name:'Latest'
         },  
         {
            id:2,
            name:'world'
         }, 
         {
            id:3,
            name:'Business'
         }, 
         {
            id:4,
            name:'Sports'
         }, 
         {
            id:5,
            name:'Life'
         }, 
         {
            id:6,
            name:'Movie'
         },    
    ]
    const oncategoryClick=(id)=>{
        setactive(id)
    }
    
  return (
   <View style={{marginTop:10}}>
      <FlatList 
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{oncategoryClick(item.id);
               SelectCategory(item.name); }}>
                <Text style={
                    item.id==active? styles.selected:styles.unselected
                    }>{item.name}</Text>
            </TouchableOpacity>
        )}
      />
   </View>
  )
}


const styles=StyleSheet.create({
    unselected:{
        marginRight:10,
        fontSize:17,
        fontWeight:'800',
        color:Color.gray,
    },
    selected:{
        marginRight:10,
        fontSize:17,
        fontWeight:'900',
        color:Color.primary,
    },
})

export default CategorySlider
