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
    TextInput,
    Picker,
    Button,
    ScrollView
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Loader from '../../Components/Loader';
import { Container, Header, Content, List, ListItem } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cards from '../Help/Cards'

const { width } = Dimensions.get('window')

class About extends Component {
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
        axios.get(`http:192.168.1.6:4000/myhire/help`)
            .then(res => {
                this.setState({ data: res.data, isLoading: false });
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
                <ScrollView>
                    <View style={styles.container} style={{ height: 210, backgroundColor: '#e1e5e4', marginHorizontal: 10, marginTop: 10, marginBottom: 5, padding: 10, }}>
                        <Image source={require('../../Assets/images/logo/header/redlogo1.png')} style={{ width: 60, height: 60, alignItems: 'center' }} />
                        <Text>
                            redBus cloning is an online bus ticket booking service that is not yet well known in Indonesia that is not trusted by more than 266 million Indonesian people who are happy globally. redBus offers bus ticket reservations for only Java Island routes through its website, Android mobile application ..
                  </Text>
                    </View>

                    <View style={{ height: 370, backgroundColor: '#e1e5e4', marginHorizontal: 10, marginTop: 10, padding: 10, marginRight: 40 }}>
                        <Content>
                            <List>
                                <ListItem>
                                    <Text style={{ fontSize: 17 }}><Icon name="home" chevron></Icon>Versi:1.0.0</Text>
                                </ListItem>
                                <ListItem >
                                    <Text style={{ fontSize: 17 }}><Icon name="share" chevron></Icon>Share With Firends</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={{ fontSize: 17 }}><Icon name="assignment" chevron></Icon>Blog</Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={{ fontSize: 17 }}><Icon name="description" chevron></Icon>Lisensi</Text>
                                </ListItem>
                            </List>
                            <Text style={{ alignSelf: 'center', marginTop: 30, marginLeft: 20 }}>
                                Developed By :
                            </Text>
                            <Text style={{ alignSelf: 'center', marginTop: 10, marginLeft: 20, fontWeight: 'bold', fontSize: 17 }}>
                                FARADAY GRUB
                            </Text>
                        </Content>
                        <View>
                            <Text style={{ alignSelf: 'center', marginLeft: 30 }}>──────── Copyleft<Image source={require('../../Assets/images/logo/header/copyleft.png')} style={{ width: 30, height: 30 }} />──────── </Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default About;
const fontSize = 14;
const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 9
    },
    text: {
        fontSize: fontSize
    },
    container: {

        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',

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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})
