import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Button} from 'native-base';

import styles from './style';
import color from '../../assets/color';

export default function LandingPage() {
  const [sliderWidth, setWidth] = useState(0);
  const images = [
    require('../../assets/img1.jpg'),
    require('../../assets/img2.jpg'),
    require('../../assets/img3.jpg'),
    require('../../assets/img4.jpg'),
  ];

  const onLayout = (e) => {
    setWidth(e.nativeEvent.layout.width);
  };

  return (
    <View style={styles.parent} onLayout={onLayout}>
      <SliderBox
        images={images}
        sliderBoxHeight={700}
        parentWidth={sliderWidth}
        dotColor={color.dotColor}
        inactiveDotColor={color.inactiveDotColor}
        ImageComponentStyle={styles.image}
        resizeMethod={'resize'}
        resizeMode={'center'}
        disableOnPress={true}
      />
      <View style={styles.bottomWrapper}>
        <Button style={styles.signupBtn} block>
          <Text style={styles.signupBtnText}>Daftar Sekarang</Text>
        </Button>
        <View style={styles.loginWrapper}>
          <Text style={styles.text}>Sudah punya akun?</Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
