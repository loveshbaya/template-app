import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Input, Text} from '../components';
import {useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const UpiPay = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
    const [upiId, setUpiId] = useState('');

  return (
    <Block safe marginTop={sizes.md} marginBottom={sizes.md} paddingHorizontal={sizes.padding}>
    <Block scroll showsVerticalScrollIndicator={true}>
        <Block card marginTop={sizes.sm} >
            <Text
                  h5
                  bold
                  marginTop={sizes.sm}
                  marginLeft={sizes.xs}>
                  Enter UPI ID
                </Text>
            <Text
              p
              marginTop={sizes.s}
              marginLeft={sizes.xs}
              marginBottom={sizes.sm}>
              Pay someone using UPI.
            </Text>
            <Input id="upiId" placeholder="UPI ID" marginBottom={sizes.sm} onChangeText={upiId => setUpiId(upiId)}/>
            <Block row  justify='space-around' paddingHorizontal={sizes.sm}>
                <Button color={colors.primaryBlue} marginBottom={sizes.base}
                        onPress={() => navigation.navigate('PrePayment', {upiId, type: 'UPI'})}>
                <Block row  justify='space-between' paddingHorizontal={sizes.sm} align='center'>
                    <Text white bold transform="uppercase">
                      Verify
                    </Text>
                </Block>

                </Button>
          </Block>
        </Block>
    </Block>
</Block>
  );
};

export default UpiPay;
