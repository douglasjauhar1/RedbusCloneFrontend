import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {View} from 'react-native'
import Cards from './Card'
import SelectBus from '../SelectBus/SelectBus'
import Cancel from './Complated';

export default class Tabed extends Component {
  render() {
    return (
      <Container>
       
        <Tabs tabBarUnderlineStyle={{ backgroundColor : '#D64F54'}}>
          <Tab heading="MY VOUCHERS" tabStyle={{backgroundColor: '#EEEEEE'}} textStyle={{color: 'grey'}} activeTabStyle={{backgroundColor: '#EEEEEE'}} activeTextStyle={{color: '#D64F54', fontWeight: '400'}}>
            <Cards/>
          </Tab>
          <Tab heading="COMPLETED" tabStyle={{backgroundColor: '#EEEEEE'}} textStyle={{color: 'grey'}} activeTabStyle={{backgroundColor: '#EEEEEE'}} activeTextStyle={{color: '#D64F54', fontWeight: '400'}}>
           <Cancel/>
          </Tab>
          <Tab heading="CANCELLED" tabStyle={{backgroundColor: '#EEEEEE'}} textStyle={{color: 'grey'}} activeTabStyle={{backgroundColor: '#EEEEEE'}} activeTextStyle={{color: '#D64F54', fontWeight: '400'}}>
            <SelectBus />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}