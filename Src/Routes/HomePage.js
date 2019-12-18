import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'

const HomePage = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // title: "My Account",
      // headerTintColor: '#ffffff',
      headerLeft: <Image source={require('../Assets/images/logo/header/ic_header.png')} style={{marginLeft:15, aspectRatio: 2, resizeMode: 'contain'}} />,
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    },
  }
})

export default createAppContainer(HomePage)