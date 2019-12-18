import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Loader extends Component<{}> {


	render() {
		return(
			<View style={styles.container}>
          <ActivityIndicator color="#e74c3c" size="large" />
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 99,
    justifyContent: "center"
  }
});