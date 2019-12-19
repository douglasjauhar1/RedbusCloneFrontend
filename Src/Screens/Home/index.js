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
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Loader from '../../Components/Loader';
import { Row } from 'native-base';

const { width } = Dimensions.get('window')

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataEng: [],
      search: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  pressFrom() {
    null
  }

  pressTo() {
    null
  }

  pressSwitch() {
    null
  }

  pressDate() {
    null
  }

  pressNext() {
    this.props.navigation.navigate('SelectBus')
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <View style={{flex:1, backgroundColor: '#e1e5e4'}}>
      <ScrollView>
        <View style={{height:175, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:10, }}>
 
          <TouchableHighlight style={{flex:1, padding:10}} underlayColor={'#ff828a'} activeOpacity={1} onPress={() => this.pressFrom()} >
            <View style={{flex:1,}}>
              <Text style={{fontWeight:'bold'}}>From</Text>
              <View style={{flex:1, flexDirection:'row', marginTop:5}}>
                <MaterialIcons name="location-city" size={35} />
                <Text style={{fontSize:25, marginLeft:10,}}>Enter origin</Text>
              </View>
            </View>
          </TouchableHighlight>

          <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Text>──────────────────────────────   </Text>
              <TouchableOpacity onPress={() => this.pressSwitch}>
                <FontAwesome5 name="exchange-alt" size={20} />
              </TouchableOpacity>    
            <Text>   ───</Text>
          </View>
          <TouchableHighlight style={{flex:1, padding:10}} underlayColor={'#ff828a'} activeOpacity={1} onPress={() => this.pressTo()} >
            <View style={{flex:1,}}>
              <Text style={{fontWeight:'bold'}}>To</Text>
              <View style={{flex:1, flexDirection:'row', marginTop:5}}>
                <MaterialIcons name="location-city" size={35} />
                <Text style={{fontSize:25, marginLeft:10,}}>Enter destination</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{height:90, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:15,}}>
          <TouchableHighlight style={{flex:1, padding:10}} underlayColor={'#ff828a'} activeOpacity={1} onPress={() => this.pressDate()} >
            <View style={{flex:1,}}>
              <Text style={{fontWeight:'bold'}}>Journey Date</Text>
              <View style={{flex:1, flexDirection:'row', marginTop:5, alignItems:'center'}}>
                <EvilIcons name="calendar" size={45} />
                <Text style={{fontSize:30, marginLeft:10,}}>27</Text>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={{fontSize:12, marginLeft:10,}}>FRI</Text>
                  <Text style={{fontSize:12, marginLeft:10,}}>DECEMBER</Text>
                </View>
                <Text style={{fontSize:28}}>Tomorrow</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{alignSelf: 'center', justifyContent:'center', marginTop:20}}>
          <TouchableOpacity onPress={()=> this.pressNext()}>
            <View style={{height:70, width:70, backgroundColor: '#ef4339', borderRadius:50, justifyContent:'center', alignItems:'center' }}> 
              <FontAwesome5 name='chevron-right' size={30} style={{color:'white'}} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:100, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:35,}}>
          <TouchableHighlight style={{flex:1, padding:10}} underlayColor={'#ff828a'} activeOpacity={1} onPress={() => this.pressDate} >
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:1}}>
                {/* IMAGE */}
                <Image source={require('../../Assets/images/icon/dompet.png')} style={{width:80, height:80}} />
              </View>
              <View style={{flex:3}}>
                <Text style={{fontWeight:'bold', fontSize:15, marginBottom:10}}>Dapatkan tiket bus gratis, sekarang!</Text>
                <Text style={{fontSize:14}}>Dapatkan Up to IDR 400.000, Klik disini untuk membagikan kode refrensi kamu</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
       
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({

})
