import React, {Component} from 'react';
import {
  Alert,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from "react-redux";
import { axiosPut } from '../../Utils/API'
import moment from 'moment'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Loader from '../../Components/Loader';
import { Input, Form, Item, DatePicker } from 'native-base';

const { width } = Dimensions.get('window')


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isEdit: false,
      btnEdit: false,
      name: '',
      date_of_birth: '',
      gender: '',
      phone_number: '',
      email: '',
      chosenDate: new Date(),
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  editProfile = async () => {
    //  this.setState({
    //   isEdit: false, 
    //   btnEdit: false,
    // })
    try {
      const response = await axiosPut("profile", {
        name: this.state.name || this.props.getUser.userDetails.name,
        date_of_birth: moment(this.state.chosenDate).format('YYYY-MM-DD'),
        gender: this.state.gender || this.props.getUser.userDetails.gender,
        email: this.state.email || this.props.getUser.userDetails.email,
      }, this.props.getToken);
      console.log("Returned data:", response);
      if (response.data.status === 200) {
        Alert.alert(
          'Submit Success!',
          "Submit edit profile successful",
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.goBack(),
              style: 'default',
            },
          ]
        );
        
      } else {
        Alert.alert(
          'Submit Failed!',
          "Submit edit profile failed",
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]
        );
      }
      
    } catch (error) {
      Alert.alert(
        'Submit Error!',
        "Submit edit profile error",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]
      );
      console.log(error)
    }
  }

  pressEdit() {
    this.setState({
      isEdit: true, 
      btnEdit: true,
    })
  }

  pressCancel() {
    this.setState({
      isEdit: false, 
      btnEdit: false,
    })
  }

  pressDone() {
    // FUNCTION EDIT PROFILE
    this.editProfile
    // this.setState({
    //   isEdit: false, 
    //   btnEdit: false,
    // })
  }


  renderEditBox = () => {
    const { userDetails } = this.props.getUser
    return (
      <View style={{flex:10, flexDirection:'row', marginTop:5}}>
        <View style={{flex:1, alignItems:'center'}}>
          <EvilIcons name='user' size={50} />
        </View>
        <View style={{flex:6, marginLeft:10}}>
          <Form>
            <Text style={{fontSize:16}}>Name</Text>
            <Item style={{marginBottom:10}}>
              <Input
                defaultValue={userDetails.name}
                onChangeText={value => this.setState({name: value})}
               />
            </Item>

            <Text style={{fontSize:16}}>DOB</Text>
            <Item style={{marginBottom:10}}>
              <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select Estimated Deadline"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#706f6f" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>

            <Text style={{fontSize:16}}>Gender</Text>
            <Item style={{marginBottom:10}}>
              <Input 
                defaultValue={userDetails.gender}
                onChangeText={value => this.setState({gender: value})}
              />
            </Item>
{/* 
            <Text style={{fontSize:16}}>Mobile Number</Text>
            <Item style={{marginBottom:10}}>
              <Input 
                defaultValue={userDetails.phone_number}
                keyboardType='numeric'
                onChangeText={value => this.setState({phone_number: value})}
              />
            </Item> */}

            <Text style={{fontSize:16}}>Email</Text>
            <Item style={{marginBottom:10}}>
              <Input
                defaultValue={userDetails.email}
                onChangeText={value => this.setState({email: value})}
              />
            </Item>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{marginVertical:10, marginRight:20 }} onPress={() => this.editProfile()}>
                <Text style={{fontWeight:'bold', fontSize:16, color:'blue', opacity:0.7}} >DONE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginVertical:10, }} onPress={() => this.pressCancel()}>
                <Text style={{fontWeight:'bold', fontSize:16, color:'blue', opacity:0.7}} >CANCEL</Text>
              </TouchableOpacity>
            </View>
            
          </Form>
        </View>
      </View>
    );
  };

  renderViewBox = () => {
    const { userDetails } = this.props.getUser

    return (
      <View style={{flex:10, flexDirection:'row', marginTop:5}}>
        <View style={{flex:1, alignItems:'center'}}>
          <EvilIcons name='user' size={50} />
        </View>
        <View style={{flex:6, marginLeft:10}}>
          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Name</Text>
            <Text style={{fontSize:16}}>{userDetails.name || 'Null'}</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>DOB</Text>
            <Text style={{fontSize:16}}>{moment(userDetails.date_of_birth).format('DD-MM-YYYY') || 'Null'}</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Gender</Text>
            <Text style={{fontSize:16}}>{userDetails.gender || 'Null'}</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Mobile Number</Text>
            <Text style={{fontSize:16}}>{userDetails.phone_number || 'Null'}</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Email</Text>
            <Text style={{fontSize:16}}>{userDetails.email || 'Null'}</Text>
          </View>
          
        </View>
      </View>
    );
  };


  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <View style={{flex:1, backgroundColor: '#e1e5e4'}}>
        <ScrollView>
          <View style={{backgroundColor: '#ffffff', marginHorizontal:10, marginTop:10, marginBottom:10 }}>
            <View style={{flex:1, padding:10}} >
              
                <View style={{flex:1, flexDirection:'row', marginLeft:10, marginTop:15}}>
                  <Text style={{flex:1, fontWeight:'bold', fontSize:16}} >PERSONAL DETAILS</Text>
                  <TouchableOpacity disabled={this.state.btnEdit} style={{alignItems:'flex-end', marginRight:20}} onPress={() => this.pressEdit()}>
                    <Text style={{fontWeight:'bold', fontSize:16, color:'blue', opacity:0.7}} >EDIT</Text>
                  </TouchableOpacity>
                </View>
                
                {this.state.isEdit ? (<this.renderEditBox/>) : (<this.renderViewBox/>)}
                
             
            </View>          
          </View>

        </ScrollView>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  getToken: state.authReducer.authData.token,
  getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({

})
