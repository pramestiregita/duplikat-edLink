import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

import Card from '../../components/PostCard';

export default function Home() {
  const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

  const end = () => {
    console.log('end');
  };

  return (
    <ScrollView style={styles.parent}>
      <View style={styles.headerWrapper}>
        <View style={styles.btnWrapper}>
          <View style={styles.menuWrapper}>
            <TouchableOpacity style={[styles.menuBtn, styles.menuYellow]}>
              <Icon name="book" size={25} color="#ffab00" />
            </TouchableOpacity>
            <Text style={styles.menuBtnText}>Data Akademik</Text>
          </View>
          <View style={styles.menuWrapper}>
            <TouchableOpacity style={[styles.menuBtn, styles.menuGrey]}>
              <Icon name="building" size={25} color="#1e263b" />
            </TouchableOpacity>
            <Text style={styles.menuBtnText}>Akreditasi</Text>
          </View>
          <View style={styles.menuWrapper}>
            <TouchableOpacity style={[styles.menuBtn, styles.menuGrey]}>
              <Icon name="university" size={25} color="#1e263b" />
            </TouchableOpacity>
            <Text style={styles.menuBtnText}>Akreditasi Prodi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.linkBtn}>
          <Icon name="exclamation-circle" size={30} color="#00753f" />
          <Text style={styles.linkBtnText}>
            Sambungkan Akun Perguruan Tinggi
          </Text>
          <Icon name="arrow-right" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.filterWrapper}>
          <TouchableOpacity style={[styles.filterBtn, styles.filterActive]}>
            <Text style={[styles.filterBtnText, styles.filterActiveText]}>
              Semua
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterBtnText}>Kelas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterBtnText}>Berita</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} />}
          onEndReached={end}
          onEndReachedThreshold={(0, 8)}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
}
