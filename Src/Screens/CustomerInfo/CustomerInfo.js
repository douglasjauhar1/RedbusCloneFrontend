import React, { Component } from "react";
import { StyleSheet, Text, Alert } from 'react-native'
import {Col, Grid} from 'react-native-easy-grid'
import { Container, Form, Item, Input, Label , Content, Card, CardItem,  Footer, Button, View} from "native-base";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { axiosPost } from '../../Utils/API'

class CustomerInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      namepassanger: '',
      age: '',
      idorder: this.props.navigation.state.params.idorder || null,
      idbus: this.props.navigation.state.params.idbus || null,
    };
  
  }

  addCustInfo = async () => {
    try {
      const response = await axiosPost("/customer/", {
        name: this.state.namepassanger,
        age: this.state.age,
        order_id: this.state.idorder,
        bus: this.state.idbus
      }, this.props.getToken);
      console.log("Returned data:", response);
      if (response) {
        Alert.alert(
          'Submit Success!',
          "Submit customer info successful",
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.navigate('PaymentOption',{idorder:this.state.idorder, idbus: this.state.idbus}),
              style: 'default',
            },
          ]
        );
        
      } else {
        Alert.alert(
          'Submit Failed!',
          "Submit customer info failed",
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]
        );
      }
      
    } catch (error) {
      Alert.alert(
        'Submit Error!',
        "Submit customer info error",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]
      );
      console.log(error)
    }
  }



  render() {
    const { userDetails } = this.props.getUser

    return (
      <Container style={{backgroundColor : '#EEEEEE'}}>
        <Content padder>
            <Text style={{color : 'black', fontSize : 17, fontWeight : 'bold', left : 5 }}>Contact Information</Text>
          <Card style={{height : 150, paddingTop : -2}}>
            <CardItem header>
            <Form style={{marginTop : -20, marginLeft : -5}}>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
                style={styles.input}
                value={userDetails.email}
              />
            </Item>
            <Item stackedLabel>
              <Label>Mobile Phone</Label>
              <Input 
                style={styles.input}
                keyboardType='numeric'
                value={userDetails.phone_number}
              />
            </Item>
          </Form>
            </CardItem>
          </Card>
          <Text style={{color : 'black', fontSize : 17, fontWeight : 'bold', left : 5 }}>Passanger Information</Text>
          <Card style={{height : 200, paddingTop : 1}}>
              <Grid style={{marginBottom : 10, marginTop : 10, marginLeft : 10}}>
                  <Col style={{flex : 3.6}}>
                  <Text style={{color : 'black', fontSize : 17, fontWeight : '300', left : 5 }}>Passenger primary</Text>
                  </Col>
                  <Col style={{flex : 1.4}}>
                  <Text style={{color : 'black', fontSize : 17, fontWeight : '300', left : 5 }}></Text>
                  </Col>
              </Grid>
          
        <CardItem>
            <Form style={{marginTop : -20, marginLeft : -5}}>
            <Item stackedLabel>
              <Input 
                style={styles.input}
                placeholder="Name"
                onChangeText={value => this.setState({namepassanger: value})}
              />
            </Item>
            <Item stackedLabel>
              <Input 
                style={styles.input}
                placeholder="Age"
                keyboardType="numeric"
                onChangeText={value => this.setState({age: value})}
              />
            </Item>
   
          </Form>
           
        </CardItem>
          </Card>
          <View style={{alignItems : 'center', marginTop : 17}}>
            <Text>By Clicking on Continue Booking, I agree to all the</Text>
            <Text style={{color : '#ef4339'}}>Terms & Conditions <Text style={{color : 'black'}}>and</Text> Privacy Policy</Text>
          </View>

        </Content> 

        <TouchableOpacity onPress={() => this.addCustInfo()}>
          <Footer style={{backgroundColor : '#ef4339'}}>
            <Text style={{marginTop : 15, color : 'white', fontSize : 15}}>
            Continue Booking
            </Text>
          </Footer>
        </TouchableOpacity>
      </Container>
    );
  }
}

mapStateToProps = (state) => ({
  getToken: state.authReducer.authData.token,
  getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);

const styles = StyleSheet.create({
    email: {
      width: 300,
    },
    password: {
      width: 300,
      marginTop: 15,
    },

    input: {
     borderBottomColor : 'grey',
      borderBottomWidth: 2,
      width : 280,
      paddingBottom : 10
      
    },
    inputd: {
        borderBottomColor : 'grey',
         borderBottomWidth: 2,
         width : 220,
         right : 80,
         marginTop : 20
         
       },
    inputs: {
        borderBottomColor : 'grey',
         borderBottomWidth: 2,
         width : 40,
         marginTop : 20
         
       }
  });