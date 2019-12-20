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
  ScrollView
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Loader from '../../Components/Loader';
import { Row } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Cards from '../Help/Cards'
import History from '../Help/History'

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
        <Text style={{marginLeft:10,marginTop:20, color:'red',fontSize:16}}>PENAWARAN</Text>
        <View style={{ height: 130, marginTop: 10 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Cards imageUri={{uri:`https://cdn1-production-images-kly.akamaized.net/HgscB32ZqiSnEt2JNZKeYpCelag=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1816217/original/011937000_1514548346-Tom_Cruise.jpg`}}
                        name="Home"
                        title="ssssssssssssss"
                    />
                    <Cards imageUri={{uri:`https://cdn1-production-images-kly.akamaized.net/HgscB32ZqiSnEt2JNZKeYpCelag=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1816217/original/011937000_1514548346-Tom_Cruise.jpg`}}
                        name="Experiences"
                    />
                    <Cards imageUri={{uri:`https://cdn1-production-images-kly.akamaized.net/HgscB32ZqiSnEt2JNZKeYpCelag=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1816217/original/011937000_1514548346-Tom_Cruise.jpg`}}
                        name="Resturant"
                    />
                </ScrollView>
            </View>
        <Text style={{marginLeft:10,marginTop:20, color:'red',fontSize:16}}>PENCARIAN TERAKHIR</Text>
        <View style={{ height: 130, marginTop: 10 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <History imageUri={{uri:`https://cdn1-production-images-kly.akamaized.net/HgscB32ZqiSnEt2JNZKeYpCelag=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1816217/original/011937000_1514548346-Tom_Cruise.jpg`}}
                    name="Home"
                    title="ssssssssssssss"
                />
                <History imageUri={{uri:`https://cdn1-production-images-kly.akamaized.net/HgscB32ZqiSnEt2JNZKeYpCelag=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1816217/original/011937000_1514548346-Tom_Cruise.jpg`}}
                    name="Experiences"
                />
                <History imageUri={{uri:`https://cdn1-production-images-kly.akamaized.net/HgscB32ZqiSnEt2JNZKeYpCelag=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1816217/original/011937000_1514548346-Tom_Cruise.jpg`}}
                    name="Resturant"
                />
            </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({

})
