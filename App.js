import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeNavigator from './App/Navigation/HomeNavigator';import { NavigationContainer } from '@react-navigation/native';
;

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <NavigationContainer>
        <HomeNavigator/>
        </NavigationContainer>
           
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:'80' ,
    padding:20
  },
});
