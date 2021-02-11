import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: 'grey',
  },
  form: {
    marginTop: 25,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: color.buttonColor,
    fontSize: 16,
  },
  alertWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertIcon: {
    color: 'red',
    marginRight: 3,
  },
  alert: {
    color: 'red',
    fontStyle: 'italic',
  },
  forgotBtn: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  forgotBtnText: {
    color: color.buttonColor,
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginBtn: {
    borderRadius: 10,
    backgroundColor: color.buttonColor,
    height: 50,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  bottomWrapper: {
    marginTop: 5,
    alignItems: 'center',
  },
  socialBtn: {
    borderRadius: 10,
    backgroundColor: color.secBtnColor,
    height: 50,
    marginTop: 10,
    elevation: 0,
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  socialBtnText: {
    fontSize: 13,
  },
  icon: {
    height: 25,
    width: 25,
    position: 'absolute',
    left: 10,
  },
  signupWrapper: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
  },
  signupBtn: {
    marginLeft: 5,
  },
  signupBtnText: {
    fontSize: 12,
    color: color.buttonColor,
  },
});
