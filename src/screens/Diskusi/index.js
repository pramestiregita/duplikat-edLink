import React, {useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './styles';

import Card from '../../components/PostCard';

export default function Diskusi({navigation}) {
  const addRef = useRef();

  const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

  const end = () => {
    console.log('end');
  };

  return (
    <View style={styles.parent}>
      <FlatList
        data={data}
        renderItem={({item}) => <Card item={item} />}
        onEndReached={end}
        onEndReachedThreshold={(0, 8)}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => addRef.current.open()}
        style={styles.addBtn}>
        <Icon name="pencil-alt" size={15} color="#fff" />
      </TouchableOpacity>

      <RBSheet
        ref={addRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: 'transparent',
          },
          container: {
            borderTopColor: '#ffab00',
            borderTopWidth: 5,
            elevation: 2,
          },
        }}
        height={350}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>Posting ke Diskusi</Text>
            <TouchableOpacity
              onPress={() => addRef.current.close()}
              style={styles.closeBtn}>
              <Icon name="times" size={25} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              addRef.current.close();
              navigation.navigate('Informasi');
            }}
            style={styles.listBtn}>
            <View style={styles.listIcon}>
              <Icon name="bullhorn" size={20} />
            </View>
            <Text style={styles.listText}>Informasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listBtn}>
            <View style={styles.listIcon}>
              <Icon name="calendar-alt" size={20} />
            </View>
            <Text style={styles.listText}>Acara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listBtn}>
            <View style={styles.listIcon}>
              <Icon name="clipboard-list" size={20} />
            </View>
            <Text style={styles.listText}>Survei</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}
