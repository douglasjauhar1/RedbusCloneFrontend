import React, { Component } from 'react';
import axios from 'axios';
import {
    FlatList,

    Dimensions,
    ActivityIndicator,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    List,
    TextInput,
    Picker,
    Button
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Loader from '../../Components/Loader';
import { Row } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window')

class Help extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            dataEng: [],
            search: '',
            isLoading: true,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: false });
        this.getData();
    }

    getData() {
        axios.get(`http:192.168.0.108:4000/myhire/help`)
        .then(res => {
          this.setState({ data: res.data , isLoading: false});
        });
    }


    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        );
    };

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#e1e5e4', fontFamily: 'Montserrat' }}>
                
                <View style={{ height: 170, backgroundColor: '#ffffff', marginHorizontal: 10, marginTop: 10, marginBottom: 5, padding: 10 }}>
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>For which booking do u need help?</Text>
                    <View style={styles.fixToText}>
                        <Picker

                            selectedValue={this.state.language}
                            style={{ height: 70, width: 100 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="+62" value="java" />
                            <Picker.Item label="+65" value="js" />
                            <Picker.Item label="+60" value="java" />
                            <Picker.Item label="+51" value="js" />
                            <Picker.Item label="+57" value="java" />
                            <Picker.Item label="+93" value="js" />
                        </Picker>
                        <TextInput
                            style={styles.input}
                            placeholder={'Mobile number used for booking'}
                            placeholderTextColor={'168, 166, 158, 0.7'}
                            onChangeText={value => this.setState({ username: value })} />
                    </View>
                    <View style={styles.Button}>
                        <Button
                            title="GO TO YOUR BOOKING"
                            color="#ef4339"
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.or}>OR</Text>
                </View>
                <View>
                    <Text style={styles.add}>Additional Topics</Text>
                </View>
                <View style={{ height: 370, backgroundColor: '#ffffff', marginHorizontal: 10, marginTop: 10, marginBottom: 5, padding: 10 }}>

                    <FlatList

                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.name_category}
                                onPress={() => { this.props.navigation.navigate('Questions' ,{
                                    idcategory: item.id_category}) }}
                                chevron
                            />
                            
                         
                            
                        )}
                        
                        keyExtractor={item => item.name_category}
                        ItemSeparatorComponent={this.renderSeparator}
                    />

                </View>
            </View>
        );
    }
}

export default Help;

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        marginRight: 80,
        marginTop: 10,
       
    },
    Button: {
        height: 45,
        marginLeft: 10,
        marginRight: 10,
      
    },
    or: {
        fontFamily: 'Montserrat',
        alignSelf: 'center',
        marginTop: 5,
        color: 'black'
    },
    add: {
        marginLeft: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: 'black'
    },
    
})
