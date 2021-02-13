import {StyleSheet} from 'react-native';
import color from '../../assets/color';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  headerWrapper: {
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  btnWrapper: {
    paddingHorizontal: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  menuWrapper: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuYellow: {
    backgroundColor: '#ffe6b3',
  },
  menuGrey: {
    backgroundColor: '#c5d0f0',
  },
  menuBtn: {
    padding: 15,
    marginBottom: 5,
    borderRadius: 15,
  },
  menuBtnText: {
    fontSize: 10,
  },
  linkBtn: {
    backgroundColor: '#ffdd00',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  linkBtnText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  content: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 10,
  },
  filterWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
  },
  filterBtn: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 0.5,
    marginRight: 10,
    borderRadius: 15,
  },
  filterBtnText: {
    fontSize: 12,
  },
  filterActive: {
    backgroundColor: color.buttonColor,
  },
  filterActiveText: {
    color: '#fff',
  },
});
