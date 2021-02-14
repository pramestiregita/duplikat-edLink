import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './style';
import {Formik} from 'formik';
import {Thumbnail} from 'native-base';

const news =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Id diam maecenas ultricies mi eget mauris pharetra. Vulputate ut pharetra sit amet. Purus gravida quis blandit turpis cursus. Purus sit amet luctus venenatis lectus magna fringilla urna. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac.';

export default function PostDetail() {
  const commentsRef = useRef();

  return (
    <View style={styles.parent}>
      <ScrollView style={styles.scrollWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://via.placeholder.com/468x200?text=image',
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.news}>{news}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => commentsRef.current.open()}
        style={styles.bottomWrapper}>
        <Icon name="comments" size={30} color="#5a1cb0" />
        <Text style={styles.count}>0 Komentar</Text>
      </TouchableOpacity>

      <RBSheet
        ref={commentsRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: 'transparent',
          },
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            elevation: 2,
          },
        }}>
        <>
          <View style={styles.commentWrapper}>
            <View style={styles.countWrapper}>
              <View style={styles.statusWrapper}>
                <View style={styles.countStatus}>
                  <Icon name="heart" size={25} />
                  <Text style={styles.countStatusText}>2 Suka</Text>
                </View>
                <View style={styles.countStatus}>
                  <Icon name="comments" size={25} />
                  <Text style={styles.countStatusText}>0 Komentar</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => commentsRef.current.close()}>
                <Icon name="times" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.listCommentWrapper}>
              <Text style={styles.comments}>No comment</Text>
            </View>
          </View>
          <Formik
            initialValues={{comments: ''}}
            onSubmit={(values) => console.log(values)}>
            {({handleBlur, handleChange, handleSubmit, values}) => (
              <View style={styles.wrapper}>
                <Thumbnail source={require('../../assets/avatar.png')} />

                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('comments')}
                    onBlur={handleBlur('comments')}
                    onSubmitEditing={handleSubmit}
                    autoFocus={true}
                    value={values.comments}
                    placeholder="Tulis komentar...."
                  />
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                  <Icon name="paper-plane" size={25} />
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </>
      </RBSheet>
    </View>
  );
}
