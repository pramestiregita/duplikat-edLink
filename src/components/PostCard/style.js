import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  cardTitle: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  time: {
    fontSize: 16,
    color: 'grey',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardBody: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  preview: {
    fontSize: 14,
  },
  count: {
    padding: 15,
    borderBottomWidth: 0.5,
  },
  action: {
    flexDirection: 'row',
  },
  actionBtn: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  actionBtnText: {
    marginLeft: 10,
    color: '#5a1cb0',
  },
});
