import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Bus extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e1e5e4', fontFamily: 'Montserrat',alignItems:'center',justifyContent:'center' }}>
                <View>
                <Image source={require('../../Assets/images/logo/header/busnot.png')} style={{height:200,width:210}}/>  
                </View>
                <View>
                    <Text style={{fontSize:15,marginTop:50}}>oops!! Sorry Bus is not Found</Text>
                </View>
            </View>
            

            
            
        );
    }
}
export default Bus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});