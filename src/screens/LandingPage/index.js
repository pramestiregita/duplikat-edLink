import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import styles from './style';
import color from '../../assets/color';

export default function LandingPage() {
  const [sliderWidth, setWidth] = useState(0);
  const images = [
    require('../../assets/img1.jpg'),
    require('../../assets/img1.jpg'),
    require('../../assets/img1.jpg'),
    require('../../assets/img1.jpg'),
  ];

  const onLayout = (e) => {
    setWidth(e.nativeEvent.layout.width);
  };

  return (
    <View style={styles.parent} onLayout={onLayout}>
      <View style={styles.space} />
      <SliderBox
        images={images}
        sliderBoxHeight={400}
        parentWidth={sliderWidth}
        dotColor={color.dotColor}
        inactiveDotColor={color.inactiveDotColor}
      />
    </View>
  );
}
