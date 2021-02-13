import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollWrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  news: {
    fontSize: 16,
    marginTop: 5,
  },
  bottomWrapper: {
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#d7edfa',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
    color: '#1688c9',
  },
});
