import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Readnews from '../screen/readnews';

const stack=createStackNavigator();

function HomeNavigator() {
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen    name='Home' component={Home} />
        <stack.Screen name='read-news' component={Readnews} />

    </stack.Navigator>
  )
}



export default HomeNavigator
