import React from 'react';
import InputFormStyles from './InputForm.styles';
import {TextInput} from 'react-native';

export default function InputFormComponent({placeholderText}) {
  return (
    <TextInput
      style={InputFormStyles.container}
      placeholder={placeholderText}
    />
  );
}
