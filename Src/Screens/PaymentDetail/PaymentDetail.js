import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import {Col, Grid} from 'react-native-easy-grid'
import { Container, Header, Content, Card, CardItem, Icon, Button} from "native-base";

export default class PaymentDetail extends Component {
    render() {
        return (
            <Container>
            <Content padder>
              <Card>
              <CardItem bordered>
                <Text style={{left : 120, color : 'grey'}}>Order ID : 121792102819</Text>
                </CardItem>
                  <Text style={{fontWeight : 'bold',left : 13, top : 2 }}>Surabaya to Jakarta on 28-10-2019</Text>
                <CardItem>  
                <Grid>
                    <Col>
                    <Image source={require('./busline.png')} style={{width : 50, height : 50}}/>
                    </Col>
                    <Col style={{flex : 2.0}}>
                    <Text style={{color : 'grey', fontSize: 18, left : 19, fontWeight : '300', top : 15}}>Harapan Jaya</Text>
                    </Col>
                    <Col style={{flex : 1.0}}>
                    <Text style={{color : 'green', fontSize : 13, marginTop : 20}}>CONFIRMED</Text>
                    </Col>
                </Grid>
                </CardItem>
              </Card>
              <CardItem style={{backgroundColor : '#eee', height : 30, justifyContent : 'center'}}>
                  <Grid>
                      <Col>
                      <Text style={{ }}>DETAILS FOR TRANSFERS</Text>
                      </Col>
                  </Grid>
              </CardItem>
              <CardItem style={{borderWidth : 0.5, borderColor : '#ccc', marginTop : 10}}>
                  <Grid>
                      <Col style={{flex : 3.0}}>
                       <Text style={{color : 'grey', fontSize : 14}}>Bank Name</Text>
                       <Text style={{color : 'black', fontSize : 20, fontWeight : 'bold', marginBottom : 5}}>BCA</Text>
                       <Text style={{color : 'grey', fontSize : 14}}>VIRTUAL RECORD PAYMENT CODE</Text>
                       <Text style={{color : 'black', fontSize : 20, fontWeight : 'bold', marginBottom : 5}}>112393013</Text>
                       <Text style={{color : 'grey', fontSize : 14}}>AMOUNT TO BE PAID</Text>
                       <Text style={{color : 'black', fontSize : 20, fontWeight : 'bold', marginBottom : 5}}>RP. 350.000</Text>
                      </Col>
                      <Col style={{flex : 1.0}}>
                      <Image source={require('./bca.png')} style={{width : 40, height : 40, left : 40}}/>
                      <Text style={{color : '#4A608B', left : 40, top : 30}}>COPY</Text>
                      <Text style={{color : '#4A608B', left : 40, top : 60}}>COPY</Text>
                      </Col>
                  </Grid>
              </CardItem>
              <CardItem style={{backgroundColor : '#E5EBF9', marginTop : 10}}>
                    <Grid>
                        <Col style={{flex : 1.0}}>
                        <Icon type='AntDesign' name='checkcircle' style={{color : 'green', marginTop : 4,left : 4}}/>
                        </Col>
                        <Col style={{flex : 5.0}}>
                        <Text>
                        E tickets will be automatically sent to the my booking menu in the form of a ticket
                        </Text>
                        </Col>
                    </Grid>
              </CardItem>
              <CardItem style={{backgroundColor : '#E5EBF9', justifyContent : 'center'}}>
                <Button style={{backgroundColor : '#465886', width : 300, justifyContent :'center'}}>
                <Text style={{color : 'white'}}>I HAVE BEEN PAID</Text>
                </Button>
               
                </CardItem>
                <CardItem style={{backgroundColor : '#E5EBF9', justifyContent :'center'}}>
                <Text style={{textAlign : 'center'}}>if you have already made the payment please click the top button</Text>
                </CardItem>
                <CardItem style={{backgroundColor : '#eee', justifyContent :'center', top : 10, borderWidth : 0.5, borderColor : '#bbb'}}>
                    <Grid>
                        <Col style={{flex : 1.0}}>
                        <Image source={require('./bangku1.png')} 
                        style={{width : 70, height : 80}}/>
                        </Col>
                        <Col style={{flex : 3.0}}>
                        <Text style={{color : 'black', fontWeight : 'bold', fontSize : 20}}>
                        Redbus Seat Guarantee
                        </Text>
                        <Text style={{color : 'grey', fontWeight : '300', fontSize : 15, marginTop : 10}}>
                        DEFINITELY CAN, OR CAN MONEY TWICE
                        </Text>
                        </Col>
                    </Grid>
                </CardItem>
                <CardItem style={{justifyContent :'center'}}>
                    <Text style={{fontWeight : 'bold'}}>THANK YOU HAVE ORDERED US</Text>
                </CardItem>
            </Content>
          </Container>
        )
    }
}
