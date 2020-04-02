import React, {Component} from 'react';
import {Text, View, CheckBox, Button} from 'react-native';
import {Tabs} from 'antd-mobile';
import SignUpStyles from './SignUpPage.styles';
import DateTimePicker from '@react-native-community/datetimepicker';

import InputFormComponent from '../Form/InputForm';

const tabs = [
  {title: 'Đăng nhập', sub: '1'},
  {title: 'Đăng ký', sub: '2'},
];

const DATE_OPTIONS = {year: 'numeric', month: 'numeric', day: 'numeric'};

export default class Cat extends Component {
  state = {
    maleCheck: false,
    femaleCheck: false,
    isDatePickerShow: false,
    birthDayInput: new Date(1598051730000),
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.birthDayInput;
    this.setState({birthDayInput: currentDate});
    this.setState({isDatePickerShow: false});
  };

  showDatePicker = () => {
    this.setState({isDatePickerShow: true});
  };

  onCheck = () => {
    const {maleCheck, femaleCheck} = this.state;

    console.log(maleCheck, femaleCheck);

    this.setState({
      maleCheck: !maleCheck,
      femaleCheck: !femaleCheck,
    });
  };

  render() {
    const {
      maleCheck,
      femaleCheck,
      isDatePickerShow,
      birthDayInput,
    } = this.state;

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
        <Text style={SignUpStyles.birthDayInput} onPress={this.showDatePicker}>
          {' ' + birthDayInput.toLocaleDateString('en-GB', DATE_OPTIONS)}
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
          <CheckBox onPress={this.onCheck} center checked={maleCheck} />
          <Text>Nam</Text>
          <CheckBox onPress={this.onCheck} center checked={femaleCheck} />
          <Text>Nữ</Text>
        </View>
        <View style={SignUpStyles.buttom}>
          <Button
            color="red"
            style={SignUpStyles.signUpButton}
            title="Đăng ký"
          />
          <Text style={SignUpStyles.bottomText}>
            Khi đăng ký là bạn đã chấp nhận{' '}
            <Text style={SignUpStyles.policy}>điều khoản sử dụng</Text>
          </Text>
        </View>
      </View>
    );
  }
}
