import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import {Col, Grid} from 'react-native-easy-grid'
import { Container, Header, Content, Card, CardItem, Text, Body, Right , Left} from "native-base";

export default class Cancel extends Component {
    render() {
        return (
            <Container>
            <Content padder>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Ticket')}} >
              <Card>
                <CardItem>
                <Grid>
                    <Col>
                    {/* <Image source={require('../image/bus1.png')} style={{width : 70, height : 60}}/> */}
                    <Text style={{color : 'black', fontSize: 28, left : 19, fontWeight : '300'}}>26</Text>
                    <Text style={{color : 'black', fontSize: 28, fontWeight : '300'}}>Senin</Text>
                    </Col>
                    <Col style={{flex : 2.0}}>
                    <Text style={{color : 'grey', fontSize: 18, left : 19, fontWeight : '300', top : 15}}>Bus Ticket</Text>
                    <Text style={{color : 'black', fontSize: 24, left : 19, fontWeight : '300', top : 30}}>Solo - Jakarta</Text>
                    <Text style={{color : 'grey', fontSize: 16, left : 19, fontWeight : '300', top : 40}}>Kramat Jati Jakarta</Text>
                    </Col>
                    <Col style={{flex : 1.0}}>
                    <Text style={{color : 'green', fontSize : 13, marginTop : 20}}>CONFIRMED</Text>
                    </Col>
                </Grid>
                </CardItem>
                <CardItem footer bordered>
                <Left style={{flex: 1.0}}>
                <Text style={{color : 'grey', fontSize: 14}}>AGT 2019</Text>
                </Left>
                <Right style={{flex: 3.0}}>
                    <Text style={{color : 'grey', fontSize: 13}}>Boarding : Terminal tirtonadi</Text>
                </Right>
                </CardItem>
              </Card>
              </TouchableOpacity>
            </Content>
          </Container>
        )
    }
}
