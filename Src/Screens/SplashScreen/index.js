import React, {Component} from 'react';
import {
  StatusBar, 
  View, 
  Text, 
  ActivityIndicator,
} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ef4339',
        }}>
        <StatusBar 
          translucent 
          backgroundColor="#c72c41" 
          barStyle="light-content" 
        />
        <Text style={{color: 'white', fontSize: 18}}>Hello Splash</Text>
        <ActivityIndicator color={'white'} />
      </View>
    );
  }
}

export default SplashScreen;
