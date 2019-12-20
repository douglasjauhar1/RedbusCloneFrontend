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
export default class Cards extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {/* <Image source={require('../image/bca.png')} style={{width : 75, height : 50}}/> */}
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: 16,
                    color: '#D17780',
                    fontWeight: '200',
                    marginBottom: 4,
                    marginLeft: 150,
                  }}>
                  EXPIRED
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
                      marginLeft: 60,
                    }}>
                    Rp. 220.000
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
                  Jakarta - Yogya (Yogyakarta)
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 12,
                    color: 'grey',
                    fontWeight: '300',
                    marginTop: 10,
                  }}>
                  Wed, 13 August 2017 (03.00 PM)
                </Text>
              </Right>
              <Left style={{flex: 1.0}}>
                <Text style={{color: 'grey', fontSize: 12, marginLeft: 70}}>
                  Sumber Alam
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#3659CB',
                    fontWeight: '700',
                    marginLeft: 170,
                  }}>
                  RE-TRY BOOKING
                </Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
