import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import { Card, CardItem, Thumbnail, List, ListItem, Separator, Footer } from 'native-base';
import ShowMore from 'react-native-show-more-button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from "react-redux";
import { axiosPost } from '../../Utils/API'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

class PaymentOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idorder: this.props.navigation.state.params.idorder || null,
      idbus: this.props.navigation.state.params.idbus || null,
    };
  }

  async pressPayNow() {
    const bodyPayNow = {paid: 0, order_id: this.state.idorder}
    const resPayNow = await axiosPost('pay',bodyPayNow,this.props.getToken)
    if(resPayNow.data.status === 200) {
      this.props.navigation.navigate('PaymentDetail', {idorder:this.state.idorder, idbus: this.state.idbus})
    }
  }


  render() {
    return (
      <View style={{flex:1, backgroundColor:'#e1e5e4'}}>
        <View style={{borderRadius:5, margin:10}}>
          <ShowMore
            buttonColor={'black'}
            height={150}
            showMoreText={<FontAwesome5 name="chevron-down" />}
            showLessText={<FontAwesome5 name="chevron-up" />}
            textAlign={'center'}>
            <Card>
              <Text
                style={{marginTop:10, textAlign: 'center', fontWeight: '300', fontSize: 19}}>
                TRAVEL DETAILS
              </Text>
              <CardItem bordered>
                <Grid>
                  <Col style={{flex: 3.0}}>
                    <Text style={{fontWeight: '200', fontSize: 17}}>
                      PAHALA KENCANA
                    </Text>
                    <Text style={{fontWeight: '200', fontSize: 17}}>
                      Jumat, 30 Desember 2019, 10.20
                    </Text>
                    <Text style={{fontWeight: '200', fontSize: 16}}>
                      BOARDING POINT : Terminal Purwodadi
                    </Text>
                    <Text style={{fontWeight: '200', fontSize: 16}}>
                      DROPPING POINT : Terminal Tirtonadi
                    </Text>
                  </Col>
                  {/* <Text style={{fontWeight : 'bold', fontSize : 18}}>Rp. 340.000</Text> */}
                </Grid>
              </CardItem>
              <Text
                style={{textAlign: 'center', fontWeight: '300', fontSize: 19}}>
                PASSENGER DETAILS
              </Text>
              <CardItem bordered>
                <Grid>
                  <Col style={{flex: 3.0}}>
                    <Text style={{fontWeight: '200', fontSize: 17}}>
                      M. DOUGLAS JAUHAR NEHRU
                    </Text>
                    <Text style={{fontWeight: '200', fontSize: 17}}>20</Text>
                  </Col>
                  <Col style={{flex: 1.0}}>
                    <Text
                      style={{fontWeight: '200', fontSize: 16, marginLeft: 20}}>
                      SEATS
                    </Text>
                    <Text
                      style={{fontWeight: '200', fontSize: 16, marginLeft: 23}}>
                      43
                    </Text>
                  </Col>
                </Grid>
              </CardItem>
              <Text
                style={{textAlign: 'center', fontWeight: '300', fontSize: 19}}>
                PRICING DETAILS
              </Text>
              <CardItem bordered>
                <Grid>
                  <Col style={{flex: 3.0}}>
                    <Text style={{fontWeight: '200', fontSize: 17}}>TOTAL</Text>
                    <Text style={{fontWeight: '200', fontSize: 17}}>
                      AMOUNT TO BE PAID
                    </Text>
                  </Col>
                  <Col style={{flex: 1.5}}>
                    <Text
                      style={{fontWeight: '200', fontSize: 16, marginLeft: 20}}>
                      400.000
                    </Text>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 16, marginLeft: 20}}>
                      400.000
                    </Text>
                  </Col>
                  {/* <Text style={{fontWeight : 'bold', fontSize : 18}}>Rp. 340.000</Text> */}
                </Grid>
              </CardItem>
            </Card>
          </ShowMore>
        </View>
        <Text style={{marginLeft:10, fontWeight:'bold'}}>PAYMENT OPTIONS</Text>
        
        <View style={{borderRadius:5, backgroundColor:'#ffffff',margin:10}}>
         
            <Collapse>
              <CollapseHeader style={{height:60}}>
                <Separator bordered >
                  <Text style={{fontSize:15}}>Virtual Account Transfer</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                    <View style={{flex:1, backgroundColor:'Yellow', flexDirection:'row'}}>
                      <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                        <View style={{flex:1, alignItems:'center' }}>
                          <Image 
                            source={require('../../Assets/images/logo/bank/bca.png')}
                            style={{width: 50, height: 50}}
                          />
                          <Text>BCA</Text>
                        </View>
                      </TouchableOpacity>  
                      <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                        <View style={{alignItems:'center'}}>
                          <Image 
                            source={require('../../Assets/images/logo/bank/bni.png')}
                            style={{width: 50, height: 50}}
                          />
                          <Text>BNI</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                </ListItem>
                <ListItem>
                  <View style={{flex:1, backgroundColor:'Yellow', flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                      <View style={{flex:1, alignItems:'center' }}>
                        <Image 
                          source={require('../../Assets/images/logo/bank/bri.png')}
                          style={{width: 60, height: 50}}
                        />
                        <Text>BRI</Text>
                      </View>
                    </TouchableOpacity>  
                    <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                      <View style={{alignItems:'center'}}>
                        <Image 
                          source={require('../../Assets/images/logo/bank/mandiri.png')}
                          style={{width: 90, height: 50}}
                        />
                        <Text>Mandiri</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ListItem>
              </CollapseBody>
            </Collapse>
            <Collapse>
              <CollapseHeader style={{height:60}}>
                <Separator bordered>
                  <Text style={{fontSize:15}}>Bank Transfer(Manual)</Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem >
                    <View style={{flex:1, backgroundColor:'Yellow', flexDirection:'row'}}>
                      <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                        <View style={{flex:1, alignItems:'center' }}>
                          <Image 
                            source={require('../../Assets/images/logo/bank/bca.png')}
                            style={{width: 50, height: 50}}
                          />
                          <Text>BCA</Text>
                        </View>
                      </TouchableOpacity>  
                      <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                        <View style={{alignItems:'center'}}>
                          <Image 
                            source={require('../../Assets/images/logo/bank/bni.png')}
                            style={{width: 50, height: 50}}
                          />
                          <Text>BNI</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                </ListItem>
                <ListItem>
                  <View style={{flex:1, backgroundColor:'Yellow', flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                      <View style={{flex:1, alignItems:'center' }}>
                        <Image 
                          source={require('../../Assets/images/logo/bank/bri.png')}
                          style={{width: 60, height: 50}}
                        />
                        <Text>BRI</Text>
                      </View>
                    </TouchableOpacity>  
                    <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                      <View style={{alignItems:'center'}}>
                        <Image 
                          source={require('../../Assets/images/logo/bank/mandiri.png')}
                          style={{width: 90, height: 50}}
                        />
                        <Text>Mandiri</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ListItem>
              </CollapseBody>
            </Collapse>
          </View>

        <TouchableOpacity style={{margin:10}} onPress={() => this.pressPayNow()}>
          <Footer style={{backgroundColor : '#ef4339'}}>
            <Text style={{marginTop : 15, fontWeight:'bold', color : 'white', fontSize : 15}}>
            PAY NOW
            </Text>
          </Footer>
        </TouchableOpacity>
       
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOptions);
