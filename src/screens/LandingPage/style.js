import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    backgroundColor: 'white',
  },
  bottomWrapper: {
    marginTop: 20,
    padding: 10,
  },
  signupBtn: {
    borderRadius: 10,
    backgroundColor: color.buttonColor,
    height: 50,
  },
  signupBtnText: {
    color: '#fff',
    fontSize: 12,
  },
  loginWrapper: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
  },
  loginBtn: {
    marginLeft: 5,
  },
  loginBtnText: {
    fontSize: 12,
    color: color.buttonColor,
  },
});
