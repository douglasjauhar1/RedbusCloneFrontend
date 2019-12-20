import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class History extends Component {
    render() {
        return (
           
            <View style={{ width: 300,borderRadius:5,   backgroundColor: '#ffffff', marginHorizontal: 10,  padding: 10 }}>
               
                <View style={{flex:2}}>
                <Text style={{fontSize:16, color:'red'}}>Jakarta - Kudus</Text>
                <Text style={{marginTop:10,fontSize:13, color:'black'}}>Rabu, 18 Des</Text>
                <Text style={{marginTop:20}}>────────────────────────────</Text>
                <Text style={{alignSelf:'flex-end', color:'blue'}}>PESAN SEKARANG</Text>
                
                </View>
            </View>
            

            
            
        );
    }
}
export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});