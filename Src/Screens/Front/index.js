import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-web-swiper';

export default class Front extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          controlsProps={{
            dotActiveStyle: {backgroundColor: 'red'},
            dotsTouchable: true,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: '',
            nextTitleStyle: {color: 'red', fontSize: 24, fontWeight: '500'},
            PrevComponent: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text style={{color: 'red', fontSize: 24, fontWeight: '500'}}>
                  {''}
                </Text>
              </TouchableOpacity>
            ),
          }}>
          <View style={[styles.slideContainer, styles.slide1]}>
            
            <Text style={{fontWeight:'bold', color:'rgb(215,78,85)', fontSize:18, marginBottom:30}}>
              Online Bus Booking
            </Text>
            <Image
              style={{height:250, resizeMode: 'contain', marginBottom: 100 }}
              source={require('../../Assets/images/front/front-1.png')}
            />
            <Text style={[styles.txtSlide]}>
              Now book buses online in Indonesia with redBus app
            </Text>
            
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Text style={{fontWeight:'bold', color:'rgb(215,78,85)', fontSize:18, marginBottom:30}}>
              Offline Payment Support
            </Text>
            <Image
              style={{height:300, resizeMode: 'contain', marginBottom: 70 }}
              source={require('../../Assets/images/front/front-2.png')}
            />
            <Text style={[styles.txtSlide]}>
              Now you can book online in redBus and pay at your nearest Alfamart
              & ATM
            </Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Text style={{fontWeight:'bold', color:'rgb(215,78,85)', fontSize:18, marginBottom:30}}>
              Cashback & Offers
            </Text>
            <Image
              style={{height:300, resizeMode: 'contain', marginBottom: 70 }}
              source={require('../../Assets/images/front/front-3.png')}
            />
            <Text style={[styles.txtSlide]}>
              Get access to amazing deals and discounts with us
            </Text>
          </View>
          <View style={[styles.slideContainer, styles.slide4]}>
            <Text style={{fontWeight:'bold', color:'rgb(215,78,85)', fontSize:18, marginBottom:30}}>
              Secured Payment
            </Text>
            <Image
              style={{height:300, resizeMode: 'contain', marginBottom: 70 }}
              source={require('../../Assets/images/front/front-4.png')}
            />
            <Text style={[styles.txtSlide]}>
              Your personal data and informastion is completely
            </Text>
          </View>
          <View style={[styles.slideContainer, styles.slide5]}>
            <Text style={{fontWeight:'bold', color:'rgb(215,78,85)', fontSize:18, marginBottom:30}}>
              Refer & Earn
            </Text>
            <Image
              style={{height:300, resizeMode: 'contain', marginBottom: 70 }}
              source={require('../../Assets/images/front/front-5.png')}
            />
            <Text style={[styles.txtSlide]}>
              Invite your friends & family to join redBus and get instant cash
              rewards in your wallet
            </Text>
          </View>
        </Swiper>
        <View>
          <TouchableOpacity
            style={styles.btnCreate}
            onPress={() => {
              this.props.navigation.navigate('LoginSignup');
            }}>
            <Text style={styles.btnTextCreate}>JOIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              this.props.navigation.navigate('LoginSignup');
            }}>
            <Text style={styles.btnTextLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide2: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide3: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide4: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  slide5: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  txtSlide: {
    textAlign: 'center',
  },
  btnCreate: {
    width: '95%',
    backgroundColor: '#d74e55',
    borderRadius: 0,
    marginTop: 20,
    marginBottom: 5,
    paddingVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    width: '95%',
    paddingVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnTextCreate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  btnTextLogin: {
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
