import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Front from '../Screens/Front';
import LoginSignup from '../Screens/LoginSignup';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';

const PublicNav = createStackNavigator({
  Front: {
    screen: Front,
    navigationOptions: {
      header: null,

    }
  },
  LoginSignup: {
    screen: LoginSignup,
    navigationOptions: {
      title: 'Login / Sign Up',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#ee4540' },
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#ee4540' },
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Sign Up',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#ee4540' },
    }
  },

}, {
  initialRouteName: 'Front'
})

export default createAppContainer(PublicNav)