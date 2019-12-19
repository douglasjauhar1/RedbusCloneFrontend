import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {connect} from "react-redux";
import { selectDate } from "../../Redux/Actions/select.actions";
import moment from 'moment'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  async onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    const datemom = moment(date)
      .format("DD MMMM YYYY")      
    const response =  await this.props.dispatch(selectDate(datemom));
    if (!response) {
      this.props.navigation.goBack()
      throw response;
    }
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          todayBackgroundColor="gray"
          selectedDayColor="#ef4339"
          selectedDayTextColor="#FFFFFF"
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  loginUser: state.authReducer.loginUser
})

mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
});