import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export default function Message() {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>this page is not available</Text>
    </View>
  );
}
