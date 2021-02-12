import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 30,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
  },
  form: {
    marginVertical: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: color.buttonColor,
    borderBottomWidth: 2,
  },
  alertWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertIcon: {
    color: 'red',
    marginRight: 3,
  },
  alert: {
    color: 'red',
    fontStyle: 'italic',
  },
  nextBtn: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: color.buttonColor,
    height: 50,
  },
  nextBtnText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  resendWrapper: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
  },
  resendBtn: {
    marginLeft: 5,
  },
  resendBtnText: {
    fontSize: 12,
    color: color.buttonColor,
  },
});
