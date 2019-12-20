
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Help from '../Screens/Help/Help';

const HelpPage = createStackNavigator({
  'Help': {
    screen: Help,
    navigationOptions: {
      title: "Help",
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    },
  }
})

export default createAppContainer(HelpPage)