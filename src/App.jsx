
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.js';


function App() {


  const Stack = createStackNavigator();
   


  return (
    <NavigationContainer>


      <SafeAreaView>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </SafeAreaView>


    </NavigationContainer>
    
  );
}

export default App;