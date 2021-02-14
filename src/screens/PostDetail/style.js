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
  commentWrapper: {
    height: 150,
    borderBottomWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  countWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  statusWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  countStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
  },
  countStatusText: {
    marginLeft: 10,
  },
  listCommentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comments: {
    color: 'grey',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
  },
});
