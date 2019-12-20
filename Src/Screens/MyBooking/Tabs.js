import React, {Component} from 'react';
import {Tab, Tabs} from 'native-base';
import {View, TouchableOpacity, Image} from 'react-native';
import Cards from './Card';
import SelectBus from '../SelectBus/SelectBus';
import Cancel from './Complated';
import {Col, Grid} from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Left,
} from 'native-base';
import {axiosGet} from '../../Utils/API';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment'

class Tabed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataOrder: [],
      dataPaid0: [],
      dataPaid1: [],
    };
  }

  componentDidMount() {
    this.getDataOrder();

    this.subs = [
      this.props.navigation.addListener('willFocus', () => {
        // this.setState({isLoading: false})
        this.getDataOrder();
      })
    ]    
  }

  async getDataOrder() {
    try {
      const resGetOrder = await axiosGet('order', this.props.getToken);
      console.log('Data Order :', resGetOrder.data.result.data);
      if (resGetOrder.data.status === 200) {
        const resdata = resGetOrder.data.result.data;

        // Function Filter data Paid 0 client
        const dataPaid0 = resdata
            .filter(item => item.paid === 0)
            .map((item) => (item));

             // Function Filter data Paid 1 client
        const dataPaid1 = resdata
        .filter(item => (item.paid === 1) && (item.total !== null) )
        .map((item) => (item));

          // console.warn(data);
        this.setState({
          dataOrder: resdata,
          dataPaid0: dataPaid0,
          dataPaid1: dataPaid1,
        });
      } else {
        console.log('Get Data order failed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  

  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#D64F54'}}>
          <Tab
            heading="MY VOUCHERS"
            tabStyle={{backgroundColor: '#EEEEEE'}}
            textStyle={{color: 'grey'}}
            activeTabStyle={{backgroundColor: '#EEEEEE'}}
            activeTextStyle={{color: '#D64F54', fontWeight: '400'}}>
            <ScrollView>
              {this.state.dataPaid0.map((item, index) => (
                <Cards 
                  total={item.total}
                  origin={item.origin_terminal}
                  destination={item.destination_terminal}
                  dateDepart={item.depart}
                  busName={item.bus_name}
                  stsPaid={item.paid}
                />
              ))}
            </ScrollView>
          </Tab>
          <Tab
            heading="COMPLETED"
            tabStyle={{backgroundColor: '#EEEEEE'}}
            textStyle={{color: 'grey'}}
            activeTabStyle={{backgroundColor: '#EEEEEE'}}
            activeTextStyle={{color: '#D64F54', fontWeight: '400'}}>
              {this.state.dataPaid1.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Ticket', {dataTicket: item} );
              }}>
                <Card>
                  <CardItem>
                    <Grid>
                      <Col>
                        <Image source={require('../../Assets/images/icon/bus-yellow.png')} style={{width : 70, height : 60}}/>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 28,
                            left: 19,
                            fontWeight: '300',
                          }}>
                          {moment(item.depart).format('DD')}
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 28,
                            fontWeight: '300',
                          }}>
                          {moment(item.depart).format('dddd')}
                        </Text>
                      </Col>
                      <Col style={{flex: 2.0}}>
                        <Text
                          style={{
                            color: 'grey',
                            fontSize: 18,
                            left: 19,
                            fontWeight: '300',
                            top: 15,
                          }}>
                          Bus Ticket
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 24,
                            left: 19,
                            fontWeight: '300',
                            top: 30,
                          }}>
                          {item.origin_terminal} - {item.destination_terminal}
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            fontSize: 16,
                            left: 19,
                            fontWeight: '300',
                            top: 40,
                          }}>
                          {item.bus_name}
                        </Text>
                      </Col>
                      <Col style={{flex: 1.0}}>
                        <Text
                          style={{color: 'green', fontSize: 13, marginTop: 20}}>
                          {item.paid === 1 ? 'CONFIRMED' : '-'}
                        </Text>
                      </Col>
                    </Grid>
                  </CardItem>
                  <CardItem footer bordered>
                    <Left style={{flex: 1.0}}>
                      <Text style={{color: 'grey', fontSize: 14}}>
                      {moment(item.depart).format('MMMM YYYY')}
                      </Text>
                    </Left>
                    <Right style={{flex: 3.0}}>
                      <Text style={{color: 'grey', fontSize: 13}}>
                        Boarding : {item.origin_terminal}
                      </Text>
                    </Right>
                  </CardItem>
                </Card>
            </TouchableOpacity>
              ))}
          </Tab>
          <Tab
            heading="CANCELLED"
            tabStyle={{backgroundColor: '#EEEEEE'}}
            textStyle={{color: 'grey'}}
            activeTabStyle={{backgroundColor: '#EEEEEE'}}
            activeTextStyle={{color: '#D64F54', fontWeight: '400'}}>
            
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

mapStateToProps = state => ({
  getToken: state.authReducer.authData.token,
});

mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabed);
