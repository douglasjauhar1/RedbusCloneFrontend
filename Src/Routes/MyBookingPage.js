
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MyBooking from '../Screens/MyBooking/Tabs';

const MyBookingPage = createStackNavigator({
  'My Bookings': {
    screen: MyBooking,
    navigationOptions: {
      title: "My Booking",
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#ef4339',
      },
    },
  }
})

export default createAppContainer(MyBookingPage)