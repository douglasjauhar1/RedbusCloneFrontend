import React, {Component} from 'react';
import axios from 'axios';
import {
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Loader from '../../Components/Loader';
import { Input, Form, Item, Label } from 'native-base';

const { width } = Dimensions.get('window')


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isEdit: false,
      btnEdit: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: false});
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
    this.setState({
      isEdit: false, 
      btnEdit: false,
    })
  }


  renderEditBox = () => {
    return (
      <View style={{flex:10, flexDirection:'row', marginTop:5}}>
        <View style={{flex:1, alignItems:'center'}}>
          <EvilIcons name='user' size={50} />
        </View>
        <View style={{flex:6, marginLeft:10}}>
          <Form>
            <Text style={{fontSize:16}}>Name</Text>
            <Item style={{marginBottom:10}}>
              <Input />
            </Item>

            <Text style={{fontSize:16}}>DOB</Text>
            <Item style={{marginBottom:10}}>
              <Input />
            </Item>

            <Text style={{fontSize:16}}>Gender</Text>
            <Item style={{marginBottom:10}}>
              <Input />
            </Item>

            <Text style={{fontSize:16}}>Mobile Number</Text>
            <Item style={{marginBottom:10}}>
              <Input />
            </Item>

            <Text style={{fontSize:16}}>Email</Text>
            <Item style={{marginBottom:10}}>
              <Input />
            </Item>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{marginVertical:10, marginRight:20 }} onPress={() => this.pressDone()}>
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
    return (
      <View style={{flex:10, flexDirection:'row', marginTop:5}}>
        <View style={{flex:1, alignItems:'center'}}>
          <EvilIcons name='user' size={50} />
        </View>
        <View style={{flex:6, marginLeft:10}}>
          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Name</Text>
            <Text style={{fontSize:16}}>Erdin Suharyadi</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>DOB</Text>
            <Text style={{fontSize:16}}>12-05-1998</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Gender</Text>
            <Text style={{fontSize:16}}>Male</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Mobile Number</Text>
            <Text style={{fontSize:16}}>089501019876</Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{fontSize:16}}>Email</Text>
            <Text style={{fontSize:16}}>erdinsuharyadi@gmail.com</Text>
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

export default Profile;

const styles = StyleSheet.create({

})
