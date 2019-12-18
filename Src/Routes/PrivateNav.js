import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator';
import Answer from '../Screens/Answer/Answer';
import Questions from '../Screens/Questions/Questions'


const HomeNavigation = createStackNavigator({
  Main: { 
    screen: BottomTabNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ef4339',
      },
      // header: null,
      headerLeft: <Image source={require('../Assets/images/logo/header/ic_header.png')} style={{marginLeft:15, aspectRatio: 2, resizeMode: 'contain'}} />,
    }, 
  },
  Answer: { 
    screen: Answer,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ef4339',
      },
      title: 'Help',
      // header: null,
      // headerLeft: <Image source={require('../Assets/images/logo/header/ic_header.png')} style={{marginLeft:15, aspectRatio: 2, resizeMode: 'contain'}} />,
    }, 
  },

  Questions: { 
    screen: Questions,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ef4339',
      },
      title: 'Questions',
      // header: null,
      // headerLeft: <Image source={require('../Assets/images/logo/header/ic_header.png')} style={{marginLeft:15, aspectRatio: 2, resizeMode: 'contain'}} />,
    }, 
  },
  
},{
  
  })

export default createAppContainer(HomeNavigation)