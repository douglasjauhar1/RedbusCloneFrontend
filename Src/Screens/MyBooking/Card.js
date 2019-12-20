import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
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
import moment from 'moment'

export default class Cards extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Content padder>
          <Card>
            <CardItem>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {/* <Image source={require('../image/bca.png')} style={{width : 75, height : 50}}/> */}
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    color: '#D17780',
                    fontWeight: '200',
                    marginBottom: 4,
                    marginLeft:'30%',
                  }}>
                  YOUR TICKET
                </Text>
              </View>
            </CardItem>
            <CardItem bordered>
              <View style={{flexDirection: 'row'}}>
                <Right>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        fontSize: 12,
                        color: 'black',
                        fontWeight: '200',
                        marginBottom: 4,
                      }}>
                      Payment Method
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        fontSize: 15,
                        color: 'black',
                        fontWeight: '700',
                        marginBottom: 4,
                      }}>
                      Virtual Account Transfers
                    </Text>
                  </View>
                </Right>
                <Left>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      fontSize: 17,
                      color: 'black',
                      fontWeight: '700',
                      marginLeft: 80,
                    }}>
                    Rp. {this.props.total}
                  </Text>
                </Left>
              </View>
            </CardItem>
            <CardItem footer bordered>
              <Right style={{flex: 1.0}}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 15,
                    color: 'black',
                    fontWeight: '400',
                    marginTop: 2,
                  }}>
                  {this.props.origin} - {this.props.destination}
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 12,
                    color: 'grey',
                    fontWeight: '300',
                    marginTop: 10,
                  }}>
                  {moment(this.props.dateDepart).format('llll')}
                </Text>
              </Right>
              <Left style={{flex: 1.0}}>
                <Text style={{color: 'grey', fontSize: 12, marginLeft: 70}}>
                  {this.props.busName}
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: '700',
                    marginLeft: 5,
                  }}>
                  status: {this.props.stsPaid === 0 ? 'Payment is not complated' : '-'}
                </Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}
