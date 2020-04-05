import {StyleSheet} from 'react-native';
import constants from '../../constants/constants';

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: constants.tikiColor,
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  tabContainer: {
    height: 50,
  },
  tabStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkBoxContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 25,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    fontSize: constants.appFontSize,
  },
  checkBoxText: {
    fontSize: constants.appFontSize,
  },
  buttom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
    alignItems: 'center',
    //backgroundColor: 'black',
  },
  signUpButton: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    width: 300,
  },
  bottomText: {
    marginTop: 10,
    fontSize: 15,
  },
  policy: {
    color: constants.tikiColor,
    textDecorationLine: 'underline',
  },
  birthDayText: {
    marginLeft: 20,
    fontSize: constants.appFontSize,
  },
  birthDayInputStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginVertical: 4,
    height: 40,
    textAlignVertical: 'center',
    fontSize: constants.appFontSize,
  },
});

export default SignUpStyles;
