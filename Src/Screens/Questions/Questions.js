import React, { Component } from 'react';
import axios from 'axios';
import {
  FlatList,

  Dimensions,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  List
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Loader from '../../Components/Loader';
import { Row } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListItem } from 'react-native-elements'

const { width } = Dimensions.get('window')

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dataEng: [],
      search: '',
      isLoading: true,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      Detaill: ''
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });

    this.getData();
  }

  getData() {
    axios.get('http:192.168.0.101:4000/myhire/answer/' + this.props.navigation.state.params.idcategory)
    .then(res => {
      this.setState({ data: res.data , isLoading: false});
      
    });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
};


  render() {
  
    return (
      <View style={{ flex: 1, backgroundColor: '#e1e5e4' }}>

        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 10, marginTop: 10, marginBottom: 5, padding: 10 }}>

          <FlatList

            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.name_detail}
                onPress={() => {this.props.navigation.navigate('Answer',{
                  iddetail: item.id_detail})}}
                chevron
              />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
          />

        </View>
      </View>
    );
  }
}

export default Questions;

const styles = StyleSheet.create({

})
