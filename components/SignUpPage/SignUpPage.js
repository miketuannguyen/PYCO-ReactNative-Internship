import React, {Component} from 'react';
import {Text, View, CheckBox, Button} from 'react-native';
import {Tabs} from 'antd-mobile';
import SignUpStyles from './SignUpPage.styles';

import InputFormComponent from '../Form/InputForm';

const tabs = [
  {title: 'Đăng nhập', sub: '1'},
  {title: 'Đăng ký', sub: '2'},
];
//where console.log :D ???

export default class Cat extends Component {
  state = {
    check: false,
  };

  render() {
    return (
      <View style={SignUpStyles.container}>
        <View style={SignUpStyles.headerContainer}>
          <Text style={SignUpStyles.headerTitle}>Đăng nhập/Đăng ký</Text>
        </View>
        <View style={SignUpStyles.tabContainer}>
          <Tabs style={SignUpStyles.tabStyle} tabs={tabs} initialPage={1} />
        </View>
        <InputFormComponent placeholderText="Họ và tên" />
        <InputFormComponent placeholderText="Số điện thoại" />
        <InputFormComponent placeholderText="Email" />
        <InputFormComponent placeholderText="Mật khẩu" />
        <InputFormComponent placeholderText="Ngày sinh" />
        <View style={SignUpStyles.checkBoxContainer}>
          <View style={SignUpStyles.checkBoxStyle}>
            <CheckBox />
            <Text>Nam</Text>
          </View>
          <View style={SignUpStyles.checkBoxStyle}>
            <CheckBox />
            <Text>Nam</Text>
          </View>
        </View>
        <Button title="Xác nhận" />
      </View>
    );
  }
}
