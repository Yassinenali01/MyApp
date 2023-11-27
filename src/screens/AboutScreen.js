import React from 'react';
import { View, StyleSheet, Button } from 'react-native'
import MainLayout from "../layouts/MainLayout";





const AboutScreen = ({ navigation }) => {

    
  return (
    <MainLayout>
      <View>
        <Button
                  title="Go to About"
                  onPress={() => navigation.navigate('About')}
              />

      </View>
    </MainLayout>
  );
};



export default AboutScreen;