import React, { Component } from 'react'
import { Image, Text, View, ScrollView } from 'react-native';
import {Col, Grid} from 'react-native-easy-grid'
import {Card, CardItem, Container, Accordion} from 'native-base'
import ShowMore from 'react-native-show-more-button';


export default class PaymentOptions extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <Container>
            <ShowMore height={100} buttonColor={"black"} height={90} showMoreText="Open" showLessText="Close" textAlign={'center'}>
          <Card>
            <Text style={{textAlign : 'center', fontWeight : '300', fontSize : 19}}>
              TRAVEL DETAILS
            </Text>
            <CardItem bordered>
              <Grid>
                <Col style={{flex : 3.0}}>
              <Text style={{fontWeight : '200', fontSize : 17}}>PAHALA KENCANA</Text>
              <Text style={{fontWeight : '200', fontSize : 17}}>Jumat, 30 Desember 2019, 10.20</Text>
              <Text style={{fontWeight : '200', fontSize : 16}}>BOARDING POINT : Terminal Purwodadi</Text>
              <Text style={{fontWeight : '200', fontSize : 16}}>DROPPING POINT : Terminal Tirtonadi</Text>
                </Col>
              {/* <Text style={{fontWeight : 'bold', fontSize : 18}}>Rp. 340.000</Text> */}
              </Grid>
            </CardItem>
            <Text style={{textAlign : 'center', fontWeight : '300', fontSize : 19}}>
            PASSENGER DETAILS
            </Text>
            <CardItem bordered>
              <Grid>
                <Col style={{flex : 3.0}}>
              <Text style={{fontWeight : '200', fontSize : 17}}>M. DOUGLAS JAUHAR NEHRU</Text>
              <Text style={{fontWeight : '200', fontSize : 17}}>20</Text>
                </Col>
                <Col style={{flex : 1.0}}>
                <Text style={{fontWeight : '200', fontSize : 16, marginLeft : 20}}>SEATS</Text>
              <Text style={{fontWeight : '200', fontSize : 16, marginLeft : 23}}>43</Text>
                </Col>
              </Grid>
            </CardItem>
            <Text style={{textAlign : 'center', fontWeight : '300', fontSize : 19}}>
            PRICING DETAILS
            </Text>
            <CardItem bordered>
              <Grid>
                <Col style={{flex : 3.0}}>
              <Text style={{fontWeight : '200', fontSize : 17}}>TOTAL</Text>
              <Text style={{fontWeight : '200', fontSize : 17}}>AMOUNT TO BE PAID</Text>
                </Col>
                <Col style={{flex : 1.5}}>
                <Text style={{fontWeight : '200', fontSize : 16, marginLeft : 20}}>400.000</Text>
                <Text style={{fontWeight : 'bold', fontSize : 16, marginLeft : 20}}>400.000</Text>
             
                </Col>
              {/* <Text style={{fontWeight : 'bold', fontSize : 18}}>Rp. 340.000</Text> */}
              </Grid>
              
            </CardItem>
          </Card>
          </ShowMore>
      
          </Container>

        )
    }
}