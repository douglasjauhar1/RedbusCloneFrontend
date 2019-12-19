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
import { ListItem, SearchBar } from 'react-native-elements';

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

class Origin extends React.Component {
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
    // title: 'Home',
    headerRight: (
      // <BorderlessButton
      //   onPress={() => navigation.navigate('Search')}
      //   style={{ marginRight: 15 }}>
      //   <Ionicons
      //     name="md-search"
      //     size={25}
      //     color="white"
      //   />
      // </BorderlessButton>
      <InputGroup rounded style={{flex:1, backgroundColor:'#ef4b4b',height:40, paddingLeft:10, paddingRight:10, width:300, marginRight:10}}>
        <Ionicons color='#ffffff' name="md-search" size={20} />
        <Input placeholderTextColor="white"  placeholder="Enter bus stop or city" style={{color:'white'}}  onChangeText={text => this.searchFilterFunction(text)} />
      </InputGroup>
    ),
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#ef4339',
    },
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
    // console.warn(this.arrayholder) 
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

  renderHeader = () => {
    return (
        <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
        />
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
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => ''+item.id}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default Origin;

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