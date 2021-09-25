import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const PaymentOptions = ({nav, route}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  console.log("hello PaymentOptions",JSON.stringify(route.params))
  return (
    <Block safe marginTop={sizes.md}>
      <Text h5 center>
      {JSON.stringify(route.params)}
      </Text>
    </Block>
  );
};

export default PaymentOptions;
