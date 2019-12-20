import React, { Component } from 'react'
import {
    Easing,
    TouchableOpacity,
    Animated,
    Dimensions,
    FlatList,
    Text,
    View,
    StyleSheet,
    Alert
  } from 'react-native';
  import {Icon, Footer, Content} from 'native-base'
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
  import {axiosPost, axiosGet} from '../../Utils/API';
  import {connect} from "react-redux";

  const { width, height } = Dimensions.get('window');

  const ROWS = 7;
  const COLS = 5;
  const TIMING = 600;
  const TEXT_HEIGHT = 20;
  let seats = [];
  let seatsAnimation = [];
  
  for (var i = 0; i < ROWS + COLS - 1; i++) {
    seatsAnimation.push(i);
  }
  
  Array(ROWS * COLS).join(' ').split(' ').map((_, i) => {
    const currentIndex = i % COLS + Math.floor(i / COLS) % ROWS;
    const currentItem = {
      label: i + 1 < 10 ? '0' + (i + 1) : i + 1,
      s: currentIndex,
      key: i,
      animated: new Animated.Value(1)
    };
  
    seats.push(currentItem);
  });
  
  class SeatBus extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        finished: false,
        selectedItems: [],
        idorder: this.props.navigation.state.params.idorder || null,
        idbus: this.props.navigation.state.params.idbus || null,
      };
  
      this.selectionAnimation = new Animated.Value(0);
  
      this.animatedValue = [];
      seatsAnimation.forEach(value => {
        this.animatedValue[value] = new Animated.Value(0);
      });
    }

    ;
    

    // PRESS NEXT SKIP
    async pressNextSkipSeat() {
      const chsSeat = this.state.selectedItems[0]+1
      
      const bodySeatBus = {seat:chsSeat, bus: this.state.idbus, order_id: this.state.idorder}
      const resSeatBus = await axiosPost('seat',bodySeatBus,this.props.getToken)
      if(resSeatBus.data.status === 200) {
        this.props.navigation.navigate('CustomerInfo', {idorder:this.state.idorder, idbus: this.state.idbus})
      }
    }
  
    animate = () => {
      const animations = seatsAnimation.map(item => {
        return Animated.timing(this.animatedValue[item], {
          toValue: this.state.finished ? 0 : 1,
          duration: TIMING
        });
      });
      Animated.sequence([
        Animated.stagger(TIMING * 0.15, animations)
      ]).start(() => {
        this.setState({
          finished: !this.state.finished,
          selectedItems: []
        });
  
        // this.selectionAnimation.setValue(0);
        Animated.timing(this.selectionAnimation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.elastic(1.3)
        }).start();
      });
    };
  
    renderItem = ({ item }) => {
      const i = item.key;
      const scale = this.animatedValue[item.s].interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0, 1]
      });
      const { selectedItems } = this.state;
      const isSelected = selectedItems.includes(item.key);
      const itemPressScale = item.animated.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0, 1]
      });
  
      return (
        <View style={styles.wrap}>
        <TouchableOpacity
          activeOpacity={0.5} 
          onPress={() => {
            const selected = isSelected
              ? selectedItems.filter(i => i !== item.key)
              : [...selectedItems, item.key];
  
            item.animated.setValue(0);
            this.setState(
              {
                selectedItems: selected
              },
              () => {
                Animated.parallel([
                  Animated.timing(this.selectionAnimation, {
                    toValue: -TEXT_HEIGHT * selected.length,
                    duration: 500,
                    easing: Easing.elastic(1.3)
                  }),
                  Animated.timing(item.animated, {
                    toValue: 1,
                    duration: 200
                  })
                ]).start();
              }
            );
          }}
          style={{
            // opacity: 1 - parseInt(item.s) / 15
          }}>
            
          <Animated.View
            style={{
              transform: [
                {
                  scale: item.animated
                }
              ]
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: '#e1e5e4',
                },
                styles.item,
                {
              
                }
              ]}
            
              >
                <Icon type="MaterialCommunityIcons"name="seat-outline"  
                style={{color : isSelected ? '#D74E55': 'grey', fontSize : 40}}/>
              <Animated.Text style={{color : isSelected ? '#D74E55' : 'grey', fontWeight : 'bold'}}>
                {item.label}
              </Animated.Text>
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>
        </View>
      );
    };
  
    render() {
      return (
        <View style={styles.container}>
          {/* <View
            style={{
              height: height * 0.1,
              width: width,
              alignItems: 'center',
              // justifyContent: 'space-between',
              flexDirection: 'row',
              // margin : 5,
              backgroundColor : '#ef4339'
            }}>
        
            <Icon
              name="refresh"
              size={22}
              color="#666"
              backgroundColor="transparent"
              onPress={this.animate}
            />

            <FontAwesome5 name="chevron-right" size={22} onPress={()=>this.pressNextSkipSeat()} />
          </View> */}
          <FlatList
          
            numColumns={COLS}
            extraData={this.state.selectedItems}
            data={seats}
            style={{ flex: 0.6, marginTop:50 }}
            renderItem={this.renderItem}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flex: 0.2,
            }}>
            <View
              style={{
                height: TEXT_HEIGHT,
                overflow: 'hidden',
                backgroundColor: 'red',
                borderBottomColor : 'red'
              }}>
              {/* <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  
                  transform: [
                    {
                      translateY: this.selectionAnimation
                    }
                  ]
                }}>
                {Array(ROWS * COLS + 1).join(' ').split(' ').map((_, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        height: 20,
                        width: 20 * 1.4,
                        marginRight: 12,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        
                      }}>
                      <Text style={[styles.text]}>
                        {i * 10}
                      </Text>
                    </View>
                  );
                })}
              </Animated.View> */}
            </View>
            <TouchableOpacity style={{margin:10}} onPress={() => this.pressNextSkipSeat()}>
            <Content />
          <Footer style={{backgroundColor : '#ef4339', width : 300}}>
            <Text style={{marginTop : 15, fontWeight:'bold', color : 'white', fontSize : 15}}>
            CHOOSE SEAT
            </Text>
          </Footer>
        </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  
  mapStateToProps = (state) => ({
    getToken: state.authReducer.authData.token,
  })
  
  mapDispatchToProps = (dispatch) => ({
    dispatch
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SeatBus);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e1e5e4',
      borderColor : '#ef4339',
      
    },
    item: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding : 5,
    
    },
    wrap : {
        // borderRadius : 10,
        // borderWidth : 0.6,
        // borderColor : 'red',
    },
    itemText: {
      color: 'grey',
      fontWeight: '700',
   
    },
    text: { fontSize: 15, fontWeight: '500' }
  });