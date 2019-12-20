import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Thumbnail,
  Button,
} from 'native-base';
import {connect} from "react-redux";
import {Grid, Col} from 'react-native-easy-grid'
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Data from './Data';
import Loader from '../../Components/Loader';
import {axiosPost, axiosGet} from '../../Utils/API';

class SelectBus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listBus: [],
      idorder: this.props.navigation.state.params.idorder || null,
    };
  }

  componentDidMount() {
    console.warn('sts_order',this.props.slcCityOrigin);
    this.getDataBus();
  }

  async getDataBus() {
    const response = await axiosGet(
      'bus?origin='+this.props.navigation.state.params.origin+'&destination='+this.props.navigation.state.params.destination+'&date='+this.props.navigation.state.params.date+' 00:00:00',
      null,
    );

    if (response.data.status) {
      console.log(response.data.result.bus);

      await this.setState({
        listBus: response.data.result.bus,
      });
    }
  }

  async pressListBus(valIdBus) {
    const bodyDateOrder = {bus: valIdBus, order_id: this.state.idorder}
    const resDateOrder = await axiosPost('bus',bodyDateOrder,this.props.getToken)
    if(resDateOrder.data.status === 200) {
      this.props.navigation.navigate('SeatBus', {idorder:this.state.idorder, idbus: valIdBus})
    }
  }

  render() {
    // const lsBus = this.setState.listBus
    const item = this.state.listBus.map((item, index) => {
      return (
      <TouchableOpacity onPress={() => this.pressListBus(item.id)}>
        <View key={item.id} style={styles.item}>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={require('./agramas.png')}
                    style={{width: 120, height: 30}}
                  />
                </Left>
              </CardItem>
              <CardItem>
                <Grid>
                  <Col style={{flex : 2.9}}>
                    <Text style={{fontWeight : 'bold'}}>
                    {moment(item.arrive).format('H:mm')} WIB -
                     <Text>{' '}
                        {moment(item.depart).format('H:mm')} WIB</Text>
                    </Text>
                    <Text style={{color: 'gray', fontSize: 16, marginTop: 4}}>
                      {item.seat} Seat
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize : 20}}>{item.bus_name}</Text>
                    <Text style={{fontSize: 16}}>{item.origin_terminal}</Text>
                  </Col>
                  <Col style={{flex : 1.0}}>
                  <Text style={{fontWeight: '700'}}>RP. {item.price}</Text>
                  </Col>
                </Grid>
              </CardItem>
            </Card>
          </Content>
        </View>
      </TouchableOpacity>
      );
    });
    return (
      <View style={styles.contentContainer}>
        <ScrollView>
          <View>{item}</View>
        </ScrollView>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  getToken: state.authReducer.authData.token,
})

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBus);

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    backgroundColor: 'white',
    borderBottomColor: 'red',
  },
});
