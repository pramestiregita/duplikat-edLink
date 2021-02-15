import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topWrapper: {
    flex: 1,
  },
  headerWrapper: {
    padding: 10,
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 16,
  },
  inputWrapper: {
    padding: 10,
  },
  inputTitle: {
    fontSize: 20,
  },
  inputDesc: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  bottomWrapper: {
    padding: 10,
    borderTopWidth: 0.5,
  },
  fileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  fileBtnText: {
    marginLeft: 10,
  },
  postBtn: {
    borderRadius: 10,
    backgroundColor: color.buttonColor,
    height: 50,
  },
  postBtnText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
