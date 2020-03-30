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
    flexDirection: 'row',
  },
  checkBoxStyle: {
    marginTop: 0,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SignUpStyles;
