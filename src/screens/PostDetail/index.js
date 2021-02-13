import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

const news =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Id diam maecenas ultricies mi eget mauris pharetra. Vulputate ut pharetra sit amet. Purus gravida quis blandit turpis cursus. Purus sit amet luctus venenatis lectus magna fringilla urna. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac. \n\nAliquam ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius. Quis enim lobortis scelerisque fermentum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque. Tortor pretium viverra suspendisse potenti nullam ac.';

export default function PostDetail() {
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
      <View style={styles.bottomWrapper}>
        <Icon name="comments" size={30} color="#5a1cb0" />
        <Text style={styles.count}>0 Komentar</Text>
      </View>
    </View>
  );
}
