import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const TransactionDetail = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  console.log("hello")
  return (
    <Block safe marginTop={sizes.md}>
    </Block>
  );
};

export default TransactionDetail;
