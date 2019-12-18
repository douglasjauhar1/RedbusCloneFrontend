
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import {connect} from "react-redux";
import {compose} from "redux";
import {Field, reduxForm} from 'redux-form';

import InputText from '../../Components/InputText';
import Loader from "../../Components/Loader";
import { loginUser } from "../../Redux/Actions/auth.actions";

class Signup extends Component<{}> {

  loginUser = async (values) => {
    try {
        const response =  await this.props.dispatch(loginUser(values));
        // console.log(response);
        if (!response) {
            throw response;
        }
    } catch (error) {
        let errorText;
        if (error.message) {
            errorText = error.message
        }
        errorText = 'Something went wrong!';
        Alert.alert(
          'Login Error!',
          errorText,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]
        );
    }
}

onSubmit = (values) => {
    this.loginUser(values);
}

  renderTextInput = field => {
    const {
      meta: {touched, error},
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: {onChange, ...restInput},
    } = field;

    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };

  render() {
    const { handleSubmit, loginUser} = this.props;
    return (
      <View style={styles.container}>
        {(loginUser && loginUser.isLoading) && <Loader />}
        <View style={{alignSelf: 'center', marginTop: 40, marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>
            Sign u using mobile number
          </Text>
        </View>
        <View style={{alignSelf: 'baseline', marginLeft: 10}}>
          <Text>
            Mobile number
          </Text>
        </View>
        <View style={{alignSelf: 'center',  marginBottom:20, marginHorizontal: 20,}}>
          <Field
              name="phone_number"
              placeholder="Mobile Number"
              component={this.renderTextInput} />
        </View>
        <View style={{alignSelf: 'baseline', marginLeft: 10}}>
          <Text>
            Password
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginBottom:20, marginHorizontal: 20,}}>
          <Field
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              component={this.renderTextInput} />
        </View>


        <View style={{alignSelf: 'center', marginHorizontal: 40}}>
          <Text style={{textAlign: 'center', fontSize: 14}}>
            By logging in, you agree to our Trems and Conditions and Privacy
            Policy
          </Text>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(this.onSubmit)}>
          <Text style={styles.btnTextLogin}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const initialValues = {
  level: '1'
}

const validate = (values) => {
  const errors = {};
  if(!values.phone_number) {
      errors.phone_number = "Mobile Number is required"
  }
  if(!values.password) {
    errors.password = "Password is required"
}
  return errors;
};



mapStateToProps = (state) => ({
  loginUser: state.authReducer.loginUser
})

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "register",
    validate,
    initialValues
  })
)(Signup);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e1e5e4',
    alignItems: 'center',
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
    width: 130,
    height: 50,
    borderWidth: 2,
    borderRadius: 1,
    borderColor: '#ef4339',
    marginTop: 20,
    marginBottom: 5,
    marginRight: 12,

    paddingVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    width:'95%',
    backgroundColor:'#ef4b4b',
    borderRadius: 0,

    marginVertical: 25,
    paddingVertical: 13
  },
  btnTextCreate: {
    fontSize: 18,
    // fontWeight:'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  btnTextLogin: {
    fontSize: 18,
    // fontWeight:'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
