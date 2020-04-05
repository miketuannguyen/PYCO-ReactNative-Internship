import React, {Component} from 'react';
import {Text, View, CheckBox, Button} from 'react-native';
import moment from 'moment';
import {Tabs} from 'antd-mobile';
import SignUpStyles from './SignUpPage.styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../api/index';

import InputFormComponent from '../Form/InputForm';

const tabs = [
  {title: 'Đăng nhập', sub: '1'},
  {title: 'Đăng ký', sub: '2'},
];

export default class Cat extends Component {
  state = {
    maleCheck: true,
    isDatePickerShow: false,
    birthDayInput: new Date(),
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.birthDayInput;
    this.setState({birthDayInput: currentDate});
    this.setState({isDatePickerShow: false});
  };

  showDatePicker = (e) => {
    e.preventDefault();
    this.setState({isDatePickerShow: true});
  };

  onCheck = () => {
    const {maleCheck} = this.state;
    this.setState({
      maleCheck: !maleCheck,
    });
  };

  onBtnPress = async () => {
    try {
      const result = await api.testAPi.postTest();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const {maleCheck, isDatePickerShow, birthDayInput} = this.state;

    return (
      <View style={SignUpStyles.container}>
        <View style={SignUpStyles.headerContainer}>
          <Text style={SignUpStyles.headerTitle}>Đăng nhập/Đăng ký</Text>
        </View>
        <View style={SignUpStyles.tabContainer}>
          <Tabs style={SignUpStyles.tabStyle} tabs={tabs} initialPage={1} />
        </View>
        <InputFormComponent textAbove="Họ và tên" />
        <InputFormComponent
          textAbove="Số điện thoại"
          inputProps={{keyboardType: 'numeric'}}
        />
        <InputFormComponent textAbove="Email" />
        <InputFormComponent
          inputProps={{secureTextEntry: true}}
          textAbove="Mật khẩu"
        />
        <Text style={SignUpStyles.birthDayText}>Ngày sinh</Text>
        <Text
          style={SignUpStyles.birthDayInputStyle}
          onPress={this.showDatePicker}>
          {' ' + moment(birthDayInput).format('DD/MM/YYYY')}
        </Text>
        {isDatePickerShow ? (
          <DateTimePicker
            testID="dateTimePicker"
            mode="date"
            value={birthDayInput}
            display="default"
            onChange={this.onChange}
          />
        ) : null}
        <View style={SignUpStyles.checkBoxContainer}>
          {/*this doesnt work*/}
          <CheckBox center checked={maleCheck} />
          <Text onPress={this.onCheck} style={SignUpStyles.checkBoxText}>
            Nam
          </Text>
          <CheckBox onPress={this.onCheck} center checked={!maleCheck} />
          <Text onPress={this.onCheck} style={SignUpStyles.checkBoxText}>
            Nữ
          </Text>
        </View>
        <Button
          onPress={this.onBtnPress}
          color="red"
          style={SignUpStyles.signUpButton}
          title="Đăng ký"
        />
        <View style={SignUpStyles.buttom}>
          <Text style={SignUpStyles.bottomText}>
            Khi đăng ký là bạn đã chấp nhận{' '}
            <Text style={SignUpStyles.policy}>điều khoản sử dụng</Text>
          </Text>
        </View>
      </View>
    );
  }
}
