import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

class LoginSignup extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={{alignSelf:'center', marginBottom:40}}>
                <Text style={{fontWeight:'bold',textAlign:'center', fontSize:18}}>Join over 60 million travellers !</Text>
              </View>
              <View style={{flexDirection:'row', alignSelf:'center', marginBottom:15}}>
                <Image
                  style={{width: 60, height: 60, marginHorizontal: 35,}}
                  source={require('../../Assets/images/logo/login/login-fb.png')}
                />
                <Image
                  style={{width: 60, height: 60, marginHorizontal: 35,}}
                  source={require('../../Assets/images/logo/login/login-google.png')}
                />
              </View>
              <View style={{alignSelf:'center', marginBottom:20, marginHorizontal:10}}>
                <Text style={{textAlign:'center', fontSize:17}}>Don't worry we never post anything on your account</Text>
              </View> 
              <View>
                <Text>──────  OR  ──────</Text>
              </View>
              <View style={{flexDirection:'row', alignSelf:'center', marginBottom:50}}>
                <TouchableOpacity style={styles.btnCreate} onPress={() => {this.props.navigation.navigate('Signup')}}>
                  <Text style={styles.btnTextCreate}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={()=> {this.props.navigation.navigate('Login')}}>
                  <Text style={styles.btnTextLogin}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignSelf:'center', marginHorizontal:40}}>
                <Text style={{textAlign:'center', fontSize:14}}>By logging in, you agree to our Trems and Conditions and Privacy Policy</Text>
              </View>
            </View>
        )
    }
} export default LoginSignup


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#e1e5e4',
      alignItems: 'center',
      justifyContent: 'center',
  },
  slideContainer: {
      flex: 1,

      alignItems: "center",
      justifyContent: "center"
  },
  slide1: {
      backgroundColor: "rgba(0,0,0,0)"
  },
  slide2: {
      backgroundColor: "rgba(0,0,0,0)"
  },
  slide3: {
      backgroundColor: "rgba(0,0,0,0)"
  },
  slide4: {
    backgroundColor: "rgba(0,0,0,0)"
  },
  slide5: {
    backgroundColor: "rgba(0,0,0,0)"
  },
  txtSlide: {
    textAlign: 'center',
  },
  btnCreate: {
    width:130,
    height:50,
    borderWidth: 2,
    borderRadius: 1,
    borderColor: '#ef4339',
    marginTop: 20,
    marginBottom: 5,
    marginRight:12,
  
    paddingVertical: 15,
    alignSelf:'center',
    justifyContent: 'center'
  },
  btnLogin: {
    width: 130,
    height:50,
    borderWidth: 2,
    borderRadius: 1,
    borderColor: '#ef4339',
    marginTop: 20,
    marginBottom: 5,
    marginLeft:12,
  
    paddingVertical: 15,
    alignSelf:'center',
    justifyContent: 'center'
  },
  btnTextCreate: {
    fontSize:18,
    // fontWeight:'bold',
    color:'#ef4339',
    textAlign:'center'
  },
  btnTextLogin: {
    fontSize:18,
    // fontWeight:'bold',
    color:'#ef4339',
    textAlign:'center'
  },
});