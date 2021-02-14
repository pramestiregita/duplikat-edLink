import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export default function Akademik() {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Kelas Akademik Anda Kosong.</Text>
      <Text style={styles.subtitle}>
        Minta dosen Anda untuk mensinkronkan dengan Siakad
      </Text>
    </View>
  );
}
