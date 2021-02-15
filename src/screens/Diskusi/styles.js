import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    position: 'relative',
  },
  addBtn: {
    position: 'absolute',
    backgroundColor: '#ffab00',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    bottom: 20,
    right: 20,
  },
  wrapper: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    flex: 1,
  },
  listBtn: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 20,
  },
  listIcon: {
    marginRight: 20,
    backgroundColor: '#eee',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
