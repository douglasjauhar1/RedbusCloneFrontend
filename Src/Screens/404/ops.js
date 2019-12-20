import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Ops extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e1e5e4', fontFamily: 'Montserrat',alignItems:'center',justifyContent:'center' }}>
                <View>
                <Image source={require('../../Assets/images/logo/header/ops.png')} style={{height:250,width:300}}/>  
                </View>
                <View>
                    <Text style={{fontSize:15,marginTop:80}}>This Page Under Construction</Text>
                </View>
            </View>
            

            
            
        );
    }
}
export default Ops;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});