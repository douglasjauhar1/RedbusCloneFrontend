import React, { Component } from "react";
import {Grid, Col} from 'react-native-easy-grid'
import {View} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from "native-base";

export default class Ticket extends Component {
  render() {
    return (
      <Container>
        <Content padder>
            <Card>
                <CardItem>
                   <Grid>
                       <Col style={{flex : 1.0}}>
                       <Icon type="MaterialCommunityIcons" name="cellphone-text" style={{fontSize : 40}}/>
                       </Col>
                       <Col style={{flex : 5.0}}>
                       <Text style={{fontSize : 12, color : 'grey'}}>
                           This Coach company accept mobile ticket, Show SMS sent to you at counter to reedem ticket, No need to take ticket print out.
                       </Text>
                       </Col>
                   
                   </Grid>
                </CardItem>
            </Card>
          <Card>
              <CardItem bordered style={{backgroundColor : '#eee'}}>
                  <Text style={{fontWeight : 'bold'}}> CONFIRMED , 8/9/2019</Text>
              </CardItem>
            <CardItem header bordered style={{backgroundColor : '#eee'}}>
              <Grid>
                  <Col style={{flex : 2.5}}>
                  <Text style={{color : 'grey'}}>FROM</Text>
                  <Text style={{color : 'black', fontWeight : 'bold'}}>Yogyakarta</Text>
                  </Col>
                  <Col style={{flex : 1.5}}>
                  <Icon type="AntDesign" name ="right" style={{marginTop : 15, fontSize: 18}}/>
                  </Col>
                  <Col style={{flex : 1.0}}>
                  <Text style={{color : 'grey', marginLeft : 30}}>TO</Text>
                  <Text style={{color : 'black', fontWeight : 'bold'}}>Jakarta</Text>
                  </Col>
              </Grid>
            </CardItem>
            <CardItem header bordered style={{backgroundColor : '#fff'}}>
              <Grid>
                  <Col style={{flex : 3.0}}>
                  <Text style={{color : 'grey', fontSize: 13}}>BOARDING POINTS</Text>
                  <Text style={{color : 'grey'}}>Yogyakarta</Text>
                  </Col>
                  <Col style={{flex : 1.0}}>
                  <Text style={{color : 'grey', fontSize: 13, marginLeft : 10}}>BOARDS</Text>
                  <Text style={{color : 'grey'}}>2.00 PM</Text>
                  </Col>
              </Grid>
            </CardItem>
            <CardItem>
                <Grid>
                    <Col>
                    <Text style={{color : 'grey', fontSize: 13}}>TRAVEL</Text>
            <Text style={{color : 'grey'}}>Kramat Jati Jakarta</Text>
                    </Col>
                </Grid>
            </CardItem>
            <CardItem  style={{backgroundColor : '#fff'}}> 
              <Grid>
                  <Col style={{flex : 3.5}}>
                  <Text style={{color : 'grey', fontSize: 13}}>PASSENGERS</Text>
                  <Text style={{color : 'grey'}}>Douglas Jauhar Nehru</Text>
                  </Col>
                  <Col style={{flex : 1.0}}>
                  <Text style={{color : 'grey', fontSize: 13, marginLeft : 10}}>SEATS</Text>
                  <Text style={{color : 'grey', marginLeft : 20}}>26</Text>
                  </Col>
              </Grid>
            </CardItem>
            <CardItem footer bordered>
                <Grid>
                    <Col>
                    <Text style={{color : 'grey', fontSize: 13}}>BOARDING POINT DETAIL</Text>
                    <Text style={{color : 'grey', marginBottom : 10}}>Terminal Giwangan Kota Yogyakarta</Text>
                    <Text style={{color : 'grey', fontSize: 13}}>DROPPING POINT DETAIL</Text>
                    <Text style={{color : 'grey'}}>Terminal Pulo Gebang Kota Jakarta</Text>
                    </Col>
                </Grid>
            </CardItem>
          </Card>
          <Card>
              <CardItem bordered>
                <Grid>
                    <Col  style={{flex : 2.0}}>
                    <Text  style={{color : 'grey', fontSize: 13}}>
                        TICKET NUMBER
                    </Text>
                    <Text  style={{color : 'grey'}}>
                        12347658
                    </Text>
                    </Col>
                    <Col>
                    <Text style={{color : 'grey', fontSize: 13, marginLeft : 45}}>
                        TOTAL
                    </Text>
                    <Text  style={{color : 'black', fontWeight : 'bold'}}>
                        120.000,00
                    </Text>
                    </Col>
                </Grid>
              </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}