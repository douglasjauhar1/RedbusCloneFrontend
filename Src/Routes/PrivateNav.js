import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator';
import Profile from '../Screens/Profile/Profile';
import SelectBus from '../Screens/SelectBus/SelectBus';
import Calendar from '../Screens/Calendar/Calendar';
import Origin from '../Screens/Origin/Origin';


const HomeNavigation = createStackNavigator({
  Main: { 
    screen: BottomTabNavigator,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ef4339',
      },
      header: null,
    }, 
  },
  Profile: { 
    screen: Profile,
    navigationOptions: {
      title:'Profile',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  SelectBus: { 
    screen: SelectBus,
    navigationOptions: {
      title:'Select Bus',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  Calendar: { 
    screen: Calendar,
    navigationOptions: {
      title:'Journey Date',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  Origin: { 
    screen: Origin,
  },
},{
  
  })

export default createAppContainer(HomeNavigation)