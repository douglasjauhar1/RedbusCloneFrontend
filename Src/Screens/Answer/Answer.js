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
  List,
  TextInput,
  Button,
  ScrollView
} from 'react-native';


class Answer extends Component {
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
      detail: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });

    this.getData();
  }

  async getData() {
    try {
       
        const profile = await axios.get('http://192.168.1.16:3000/v1/redbus/detail/' + this.props.navigation.state.params.iddetail)
        console.log(profile);

        await this.setState({
            detail: profile.data[0]

        });
    } catch (error) {
        console.log(error);
    }
}


  render() {
    console.log(this.props.id_detail);
    return (
      <View style={{ flex: 1, backgroundColor: '#e1e5e4' }}>
        
        <ScrollView>
          
  <Text style={styles.title}>{this.state.detail.name_detail}</Text>
    <Text style={styles.textbody}>{this.state.detail.answer}</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Masukkan nomor telepon anda'}
            placeholderTextColor={'168, 166, 158, 0.7'}
            onChangeText={value => this.setState({ username: value })} />
          <TextInput
            style={styles.input}
            placeholder={'Masukkan alamat email anda'}
            placeholderTextColor={'168, 166, 158, 0.7'}
            onChangeText={value => this.setState({ username: value })} />
          <TextInput
            style={styles.area}
            placeholder={'Jelaskan masalah anda'}
            placeholderTextColor={'168, 166, 158, 0.7'}
            onChangeText={value => this.setState({ username: value })} />
        </View>
        <View  style={styles.Button}>
        <Button       
          title="AJUKAN"
          color="#c20e0e"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
        <View  style={styles.Button}>
        <Button       
          title="CALL US"
          color="#575475"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default Answer;

const styles = StyleSheet.create({
  textbody: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    marginRight: 20
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 27,
    marginRight: 20,

  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  area: {
    height: 170,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    textAlignVertical:'top'
  },
  Button:{
    height: 45,
    marginTop: 10,
    marginLeft:20,
    marginRight:20,
   
  }

})
