import React ,{useEffect,useState} from 'react'


import { StyleSheet,View ,Text, ScrollView, ActivityIndicator, Dimensions} from 'react-native'
import CategorySlider from '../Components/Home/CategorySlider'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons'
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import Api from '../services/Api';
import HeadlineList from '../Components/Home/HeadlineList';


function Home() {

    const [newslist,setnewslist]=useState(null);
    const [loading,setloading]=useState(true);
    useEffect(()=>{
       // getTopHeadline();
        getByCategory('latest');
    },[])

    const getByCategory=async(category)=>{
        setloading(true);
        const result=(await Api.getByCategory(category)).data;
        setnewslist(result.articles);
        setloading(false);
    }

    const getTopHeadline=async()=>{
        const result=(await Api.topHeadlines).data;
        setnewslist(result.articles);
       // console.log(newslist[1].urlToImage);
  }

  return (
    <ScrollView  style={{backgroundColor:'#fff'}}>
        <View style={{display:'flex',flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'}}>
        <Text style={styles.appName}>NewsApp</Text>
        <Ionicons name="notifications-outline" size={30} color="black" />

        </View>
        <CategorySlider SelectCategory={(category)=>getByCategory(category)}/>
         {/* Top headline Slider */}
           {loading==true?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={'large'}color={Color.primary}/>:<View>
         <TopHeadlineSlider newslist={newslist}/>
    

           <HeadlineList newslist={newslist}/>
           </View>}
         
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:24,
        fontWeight:'bold',
        color:Color.primary,
        paddingTop:25
    }
})

export default Home
