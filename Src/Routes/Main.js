import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar ,
} from 'react-native';

import {connect} from "react-redux";
import PublicNav from './PublicNav';
import PrivateNav from './PrivateNav';

class Main extends Component<{}> {

	render() {
    const {authData:{isLoggedIn}} = this.props;
    // console.warn(isLoggedIn)
    if (isLoggedIn == true ){
      return(
        <View style={styles.container}>
          {/* <StatusBar
            translucent 
            backgroundColor="transparent"
            barStyle="dark-content"
          /> */}
          <PrivateNav/>
      
        </View>
      )     
    } else {
      return(
        <View style={styles.container}>
          {/* <StatusBar
            translucent 
            backgroundColor="transparent"
            barStyle="dark-content"
          /> */}
          <PublicNav/>
        </View>
      )
    } 
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

mapStateToProps = state => ({
  authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Main)
