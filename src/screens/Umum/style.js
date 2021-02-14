import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  card: {
    width: '100%',
    height: 100,
  },
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
