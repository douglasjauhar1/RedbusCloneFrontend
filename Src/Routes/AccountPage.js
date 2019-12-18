
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Account from '../Screens/Account/Account';

const AccountPage = createStackNavigator({
  Home: {
    screen: Account,
    navigationOptions: {
      title: "My Account",
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    },
  }
})

export default createAppContainer(AccountPage)