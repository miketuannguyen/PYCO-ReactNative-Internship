import {StyleSheet} from 'react-native';
import constants from '../../constants/constants';

const InputFormStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    fontSize: constants.appFontSize,
  },
  textAboveStyle: {
    fontSize: constants.appFontSize,
  },
  inputStyle: {
    height: 40,
    fontSize: constants.appFontSize,
  },
});

export default InputFormStyles;
