import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

export default function Umum() {
  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.card}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/classroom.jpg')}>
          <View style={styles.wrapper}>
            <View style={styles.cardHeader}>
              <View style={styles.header}>
                <Text style={styles.title}>Helpdesk edLink</Text>
              </View>
              <Icon name="ellipsis-v" size={15} color="#fff" />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>
                Update terakhir : Senin, 7 November 2016
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
