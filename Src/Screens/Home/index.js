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
  SafeAreaView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Loader from '../../Components/Loader';
import { Row } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <View style={{flex:1, backgroundColor: '#e1e5e4'}}>
        <View style={{height:150, backgroundColor: '#ffffff', marginHorizontal:10, marginTop:10, marginBottom: 5, padding:10}}>
          <View style={{flex:1,}}>
            <Text style={{fontWeight:'bold'}}>From</Text>
            <View style={{flex:1, flexDirection:'row', marginTop:5}}>
              <MaterialIcons name="location-city" size={35} />
              <Text style={{fontSize:25, marginLeft:10,}}>Enter origin</Text>
            </View>
          </View>
          <View>
                <FontAwesome5 name="exchange-alt" style={{ transform: [{ rotate: '360deg'}]}} />
                {/* <Text> ──────────────────────────────   OR   ───</Text> */}
        
          </View>
          <View style={{flex:1,}}>
            <Text style={{fontWeight:'bold'}}>To</Text>
            <View style={{flex:1, flexDirection:'row', marginTop:5}}>
              <MaterialIcons name="location-city" size={35} />
              <Text style={{fontSize:25, marginLeft:10,}}>Enter destination</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({

})
