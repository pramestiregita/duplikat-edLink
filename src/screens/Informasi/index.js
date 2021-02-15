import {Button} from 'native-base';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

export default function Informasi({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.topWrapper}>
        <View style={styles.headerWrapper}>
          <Text>Bagikan di :</Text>
          <Text style={styles.title}>Helpdesk edLink</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputTitle}
            placeholder="Tulis judul informasi Anda..."
          />
          <TextInput
            multiline
            style={styles.inputDesc}
            placeholder="Deskripsi tentang informasi Anda..."
          />
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={styles.fileBtn}>
          <Icon name="paperclip" size={12} />
          <Text style={styles.fileBtnText}>Lampirkan file</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('Diskusi')}
          style={styles.postBtn}
          block>
          <Text style={styles.postBtnText}>Post Informasi</Text>
        </Button>
      </View>
    </View>
  );
}
