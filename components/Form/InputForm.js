import React from 'react';
import InputFormStyles from './InputForm.styles';
import {View, Text, TextInput} from 'react-native';

export default function InputFormComponent({textAbove, inputProps}) {
  return (
    <View style={InputFormStyles.container}>
      <Text>{textAbove}</Text>
      <TextInput style={InputFormStyles.inputStyle} {...inputProps} />
    </View>
  );
}
