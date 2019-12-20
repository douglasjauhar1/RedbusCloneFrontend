import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Help from '../Screens/Help/Help';
import Ops from '../Screens/404/ops';
import About from '../Screens/About/About';
import Bus from '../Screens/404/Bus';

const BottomTabNavigator = createBottomTabNavigator({
  Home: Home,
  'My Bookings': {
    screen: Bus,
  },
  Help: {
    screen: Help,
  },
  'My Account': {
    screen: About,
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'My Bookings') {
        return <MaterialCommunityIcons name='format-list-checkbox' size={32} color={focused ? '#ef4b4b' : '#bababa'} />
      } else if (routeName === 'Help') {
        iconName = 'earphones-alt';
      } else if (routeName === 'My Account') {
        return <EvilIcons name='user' size={40} color={focused ? '#ef4b4b' : '#bababa'} />
      }
      return <Icon name={iconName} size={26} color={focused ? '#ef4b4b' : '#bababa'} />;
    },
  }), 
  tabBarOptions: {
    activeTintColor: '#ef4b4b',
    inactiveTintColor: '#bababa',
    
    style:{
      height:60, 
      paddingBottom: 8, 
      paddingTop: 8,
      borderTopWidth:0, 
      borderTopColor:'white',
    },
  }
}
);

export default BottomTabNavigator;
