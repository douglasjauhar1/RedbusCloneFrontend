import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text,  Right, Left, Thumbnail, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Data from './Data';
import Loader from '../../Components/Loader';




export default class SelectBus extends Component {
  render() {
      const item = Data.map( (item, index) => {
         return <View key={item.id} style={styles.item}>
             <Content>
                    <Card>
                    <CardItem>
                        <Left>
                          <Thumbnail source={require('./agramas.png')} style={{width : 120, height : 30}}/>
                        </Left>  
                    </CardItem>
                    <CardItem  style={{marginTop : -5 }}>
                        <Left>
                        <View style={{alignItems : 'flex-start' , marginLeft : 5, alignContent : 'flex-start', justifyContent : 'flex-start'}}>
                        <Text style={{fontWeight : '700'}}>{item.go} PM-
                        <Text style={{fontWeight : 'normal'}}>
                             {item.back} AM</Text></Text>
                      <Text style={{color : 'gray', fontSize : 12, marginTop : 4}}>
                          {item.seat}
                      </Text>
                        <Text style={{fontWeight : 'bold'}}>
                            {item.text}
                        </Text>
                        <Text style={{fontSize : 11}}>{item.terminal}</Text>
                        </View>
                        </Left>
                    <Right>
                        <View style={{alignItems : 'flex-end', marginLeft : 10}}>
                        <Text style={{fontWeight : '700'}}>RP. {item.price}</Text>
                        <Button iconLeft style={{width : 60, height : 20,  marginTop : 4, backgroundColor : '#E9AF37'}}>
                        <Icon name="star"  size={11} color="#ffff" style={{left : 10}} />
                              <Text style={{fontSize : 11, fontWeight : 'bold', textAlign : 'center'}}>{item.star}</Text>
                       </Button>
                        <Button iconLeft  style={{width : 60, height : 20, backgroundColor: '#ccc'}}>
                              <Text style={{fontSize : 8, fontWeight : 'bold', color : 'grey'}}>{item.slot}</Text>
                       </Button>
                        </View>
                    </Right>
                    </CardItem>
                    </Card>
                    </Content>
                </View>
      })
      return (
          <View style={styles.contentContainer}>
              <ScrollView >
                  <View>
                      {item}
                  </View>
              </ScrollView>
          </View>
      )
  }
};

const styles = StyleSheet.create({
  headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
  },
  contentContainer: {
      backgroundColor: 'white',
      borderBottomColor : 'red'
  },

})