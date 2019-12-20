import React, {Component} from 'react';
import axios from 'axios';
import {
  Alert,
  FlatList,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {connect} from "react-redux";
import moment from 'moment'
import { List, ListItem } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Loader from '../../Components/Loader';
import { Row } from 'native-base';
import { logoutUser } from "../../Redux/Actions/auth.actions";

const { width } = Dimensions.get('window')

const listmenu = [
  {
    id: 1,
    title: 'My Bookings',
    nav: 'MyBookings'
  },
  {
    id: 2,
    title: 'Wallet',
    nav: 'Wallet'
  },
  {
    id: 3,
    title: 'Cards',
    nav: 'Cards'
  },
  {
    id: 4,
    title: 'Co-Passenggers(Bus)',
    nav: 'Passengger'
  },
  {
    id: 5,
    title: 'Refer & Earn',
    nav: 'Refer'
  },
  {
    id: 6,
    title: 'Offers',
    nav: 'Offers'
  },
  {
    id: 7,
    title: 'Help',
    nav: 'Help'
  },
  {
    id: 8,
    title: 'Call Support',
    nav: 'Support'
  },
  {
    id: 9,
    title: 'About Us',
    nav: 'About'
  },
  {
    id: 10,
    title: 'Settings',
    nav: 'Settings'
  },
];

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataEng: [],
      search: '',
      isLoading: true,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: false});
    console.warn(this.props.getUser);
    
  }

  logout = () => {
    this.props.dispatch(logoutUser());
  }

  
  pressProfile() {
    this.props.navigation.navigate('Profile')
  }

  pressLogout() {
    Alert.alert(
      'Confirm Logout',
      'Are you sure to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Logout Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.logout()},
      ],
      {cancelable: false},
    );
  }


  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    const { userDetails } = this.props.getUser

    return (
      <View style={{flex:1, backgroundColor: '#e1e5e4'}}>
        <ScrollView>
          <View style={{height:115, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:10, marginBottom:10 }}>
            <TouchableOpacity style={{flex:1, padding:10}} onPress={() => {this.pressProfile()}} >
              <View style={{flex:1,}}>
                <View style={{flex:1, flexDirection:'row', marginTop:5}}>
                  <View style={{flex:1, alignItems:'center'}}>
                    <EvilIcons name='user' size={45} />
                  </View>
                  <View style={{flex:6, marginLeft:10}}>
                    <Text style={{fontSize:16}}>{userDetails.name || 'Null'}</Text>
                    <Text style={{fontSize:16}}>{userDetails.gender || 'Null'}, {moment(userDetails.date_of_birth).format('DD-MM-YYYY') || 'Null'}</Text>
                    <Text style={{fontSize:16}}>{userDetails.phone_number || 'Null'}</Text>
                    <Text style={{fontSize:16}}>{userDetails.email || 'Null'}</Text>
                  </View>
                  <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                    <EvilIcons name='chevron-right' size={25} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>          
          </View>

          <View style={{backgroundColor: '#ffffff', marginHorizontal:10, marginTop:10, }}>
            {
              listmenu.map((item, index)   => (
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate(''+item.nav)}}>
                  <ListItem
                    key={item.id}
                    title={item.title}
                    bottomDivider
                    chevron
                  />
                </TouchableOpacity>
              ))
            }
          </View>

          <View style={{height:50, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:20, marginBottom:10 }}>
            <TouchableOpacity style={{flex:1, padding:10,justifyContent:'center'}} onPress={() => this.pressLogout()} >
              <Text style={{marginLeft:5, fontSize:15, }}>Logout</Text>
            </TouchableOpacity>          
          </View>
        </ScrollView>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({

})
