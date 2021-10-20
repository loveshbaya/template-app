import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block} from '../components';
import {useTheme, useTranslation} from '../hooks';


const isAndroid = Platform.OS === 'android';

const Services = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
    const {assets, colors, sizes, fonts, weights} = useTheme();
  console.log("hello")
  const [flipCard, setFlipCard] = useState();
  return (
      <Block safe>
      </Block>
  );
};

export default Services;
