import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Cards extends Component {
    render() {
        return (
           
            <View style={{ width: 250,borderRadius:5,  flexDirection:'row', backgroundColor: '#ffffff', marginHorizontal: 10,  padding: 10 }}>
                <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                    <Image source={this.props.imageUri}
                        style={{ width: 50, height: 50, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{flex:2}}>
                <Text style={{fontSize:13, color:'red'}}>Cashback 30% 1 Hanya untuk pembayaran dengan ovo</Text>
                <Text style={{marginTop:10,fontSize:13, color:'black'}}>Berlaku sejak 04-Des-2019 Pilih kota Tujuan 31-Des-2019</Text>
                
                
                </View>
            </View>
            

            
            
        );
    }
}
export default Cards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});