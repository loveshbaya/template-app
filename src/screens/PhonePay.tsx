import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Text, Input} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const PhonePay = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes, gradients} = useTheme();
  return (
    <Block safe marginTop={sizes.md} marginBottom={sizes.md} paddingHorizontal={sizes.padding}>
    <Block scroll showsVerticalScrollIndicator={true}>
        <Block card marginTop={sizes.sm} >
            <Text
                  h5
                  bold
                  marginTop={sizes.sm}
                  marginLeft={sizes.xs}>
                  Enter a phone number
                </Text>
            <Text
              p
              marginTop={sizes.s}
              marginLeft={sizes.xs}
              marginBottom={sizes.sm}>
              Pay someone using an UPI verified phone number.
            </Text>
            <Input keyboardType='number-pad' maxLength={10} indPhoneNumber  placeholder="Phone Number" marginBottom={sizes.sm} />
        </Block>
    </Block>
</Block>
  );
};

export default PhonePay;
