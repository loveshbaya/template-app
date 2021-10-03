import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block} from '../components';
import {useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const Wallet = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  console.log("hello")
  return (
      <Block safe>
    </Block>
  );
};

export default Wallet;
