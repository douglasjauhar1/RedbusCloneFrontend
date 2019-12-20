import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator';
import Profile from '../Screens/Profile/Profile';
import SelectBus from '../Screens/SelectBus/SelectBus';
import SeatBus from '../Screens/SeatBus/SeatBus';
import Calendar from '../Screens/Calendar/Calendar';
import Origin from '../Screens/Origin/Origin';
import Destination from '../Screens/Destination/Destination';
import CustomerInfo from '../Screens/CustomerInfo/CustomerInfo';
import Ticket from '../Screens/Ticket/Ticket';
import PaymentOptions from '../Screens/PaymentOptions/PaymentOptions';
import PaymentDetail from '../Screens/PaymentDetail/PaymentDetail';


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
  SeatBus: { 
    screen: SeatBus,
    navigationOptions: {
      title:'Choose Seat Bus',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  CustomerInfo: { 
    screen: CustomerInfo,
    navigationOptions: {
      title:'Customer Info',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  PaymentOption: { 
    screen: PaymentOptions,
    navigationOptions: {
      title:'Payment',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  PaymentDetail: { 
    screen: PaymentDetail,
    navigationOptions: {
      title:'Payment',
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
  Ticket: { 
    screen: Ticket,
    navigationOptions: {
      title:'My Ticket',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    }, 
  },
  Origin: { 
    screen: Origin,
  },
  Destination: { 
    screen: Destination,
  },
},{
  
  })

export default createAppContainer(HomeNavigation)