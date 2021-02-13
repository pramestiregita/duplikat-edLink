import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

export default function Card({item}) {
  return (
    <View key={item.id} style={styles.card}>
      <View style={styles.cardTitle}>
        <Thumbnail source={require('../../assets/avatar.png')} />
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.time}>Time</Text>
        </View>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://via.placeholder.com/468x200?text=image',
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.preview}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.count}>
        <Text>7 suka</Text>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="heart" size={20} color="#5a1cb0" />
          <Text style={styles.actionBtnText}>Suka</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Icon name="comments" size={20} color="#5a1cb0" />
          <Text style={styles.actionBtnText}>Komentari</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
