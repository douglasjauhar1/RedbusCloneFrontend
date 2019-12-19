import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Input, InputGroup } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { axiosGet } from "../../Utils/API"
import Loader from '../../Components/Loader'
import {connect} from "react-redux";
import { ListItem, SearchBar } from 'react-native-elements';
import { selectDest } from "../../Redux/Actions/select.actions";

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <MaterialIcons name="location-city" color='gray' size={25} />
      <View style={{alignItems:"center", justifyContent:'center', marginLeft:15}}>
        <Text style={{fontWeight:"bold"}}>{item.city_name}</Text>
      </View>
    </View>
  );
}

class Destination extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSearch: false,
      isLoading: true,
      dataCity: [],
      value: '',
      arrayholder: [],
    }

  }

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  async getDataCity() {
    try {
      const resGetCity = await axiosGet('city', null)
      console.log(resGetCity)
      if(resGetCity.data.status === 200) {
        const resdata = resGetCity.data.result.city
        this.setState({
          dataCity: resdata,
          isLoading: false,
          arrayholder: resdata,
        })

      } else {
        console.log('Get city failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getDataCity() 
  }

  searchFilterFunction = text => {
    this.setState({
        value: text,
    });

    const newData = this.state.arrayholder.filter(item => {
        const itemData = `${item.city_name.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataCity: newData,
    });
  };

  async pressCity(value) {
    const response =  await this.props.dispatch(selectDest(value));
    this.props.navigation.goBack();
    if (!response) {
      throw response;
    }

  }

  renderHeader = () => {
    return (
      <View style={{flex:1,flexDirection:'row', backgroundColor:'#ef4339'}}>
        
          <View style={{width:50, alignItems:'center', justifyContent:'center', marginRight:10, marginRight:15}}> 
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
              <MaterialIcons name="arrow-back" color='white' size={25}  />
            </TouchableOpacity>
          </View>
      
          <SearchBar
            placeholder="Enter city"
            lightTheme
            round
            platform="android"
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
            searchIcon={<MaterialIcons name="search" color='white' size={25} />}
            placeholderTextColor='#eeee'
            inputStyle={{color:'white'}}
            inputContainerStyle={{backgroundColor: '#ef4339'}}
            containerStyle={{backgroundColor: '#ef4339', flex:1, marginLeft: 20}}
          />        
      </View>
        
    );
  };

  render() {
  

    if(this.state.isLoading){
      return(
        <Loader />
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.dataCity}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={()=> this.pressCity({id:item.id, name:item.city_name})}>
            <View style={styles.listItem}>
              <MaterialIcons name="location-city" color='gray' size={25} />
              <View style={{alignItems:"center", justifyContent:'center', marginLeft:15}}>
                <Text style={{fontWeight:"bold"}}>{item.city_name}</Text>
              </View>
            </View>
          </TouchableOpacity>  
          }
          keyExtractor={item => ''+item.id}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}


mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(Destination);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  listItem:{
    padding:10,
    backgroundColor:"#FFF",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});