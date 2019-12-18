import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator';


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
  
},{
  
  })

export default createAppContainer(HomeNavigation)