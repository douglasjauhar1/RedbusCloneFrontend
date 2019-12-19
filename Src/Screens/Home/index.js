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
import moment from "moment";
import {connect} from "react-redux";
import {axiosPost, axiosGet} from '../../Utils/API';

const { width } = Dimensions.get('window')

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataEng: [],
      search: '',
      isLoading: true,
      cityNmFrom: 'Enter origin',
      cityNmTo: 'Enter destination',
      sDate: '',
      cityIdFrom: null,
      cityIdTo: null,
    };
  }

   async componentDidMount() {
    this.setState({isLoading: false});  
  
    this.subs = [
      this.props.navigation.addListener('willFocus', () => {
        this.setState({
          isLoading: false,
          cityNmFrom: this.props.slcCityOrigin.cityNm || 'Enter origin',
          cityNmTo: this.props.slcCityDestination.destNm || 'Enter destination',
          cityIdFrom: this.props.slcCityOrigin.cityId,
          cityIdTo: this.props.slcCityDestination.destId,
          sDate: moment(this.props.slcDate.journeyDate).format("YYYY-MM-DD")
        })

        
      })
      
    ]    
  }

  pressFrom() {
    this.props.navigation.navigate('Origin')
  }

  pressTo() {
    this.props.navigation.navigate('Destination')
  }

  pressSwitch() {
    null
  }

  pressDate() {
    this.props.navigation.navigate('Calendar')
  }

  pressNext() {
    const {cityIdFrom, cityNmFrom, cityIdTo, cityNmTo, sDate} = this.state
    const bodyParams = {origin: cityIdFrom, destination: cityIdTo, date: sDate}
    this.props.navigation.navigate('SelectBus', {origin: cityNmFrom, destination: cityNmTo, date: sDate})

    axiosPost('dateorder/',bodyParams,this.props.getToken)
    
  }



  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <View style={{flex:1, backgroundColor: '#e1e5e4'}}>
      <ScrollView>
        <View style={{height:175, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:10, }}>
 
          <TouchableHighlight style={{flex:1, padding:10}} underlayColor={'#ff828a'} activeOpacity={1} onPress={() => {this.props.navigation.navigate('Origin')}} >
            <View style={{flex:1,}}>
              <Text style={{fontWeight:'bold'}}>From</Text>
              <View style={{flex:1, flexDirection:'row', marginTop:5}}>
                <MaterialIcons name="location-city" size={35} />
                <Text style={{fontSize:25, marginLeft:10,}}>{this.state.cityNmFrom}</Text>
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
                <Text style={{fontSize:25, marginLeft:10,}}>{this.state.cityNmTo}</Text>
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
                <Text style={{fontSize:30, marginLeft:10,}}>{moment(this.props.slcDate.journeyDate).format("D")}</Text>
                <View style={{flex:1, flexDirection:'column'}}>
                  <Text style={{fontSize:12, marginLeft:10,}}>{moment(this.props.slcDate.journeyDate).format("ddd")}</Text>
                  <Text style={{fontSize:12, marginLeft:10,}}>{moment(this.props.slcDate.journeyDate).format("MMMM")}</Text>
                </View>
                <Text style={{fontSize:28}}>{moment(this.props.slcDate.journeyDate).format("YYYY")}</Text>
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

mapStateToProps = (state) => ({
  getToken: state.authReducer.authData.token,
  slcDate: state.selectReducer.selectDate,
  slcCityOrigin: state.selectReducer.selectCity,
  slcCityDestination: state.selectReducer.selectDest,
})

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({

})
