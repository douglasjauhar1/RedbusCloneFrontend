import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import AccountPage from './AccountPage';
import HomePage from './HomePage';

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomePage,
  'My Bookings': {
    screen: Home,
  },
  Help: {
    screen: Home,
  },
  'My Account': {
    screen: AccountPage,
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
