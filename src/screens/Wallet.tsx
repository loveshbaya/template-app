import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Input, Text} from '../components';
import {useTheme, useTranslation} from '../hooks';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faWallet} from "@fortawesome/free-solid-svg-icons";

const isAndroid = Platform.OS === 'android';

const Wallet = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes, fonts, weights} = useTheme();
  const [amount, setAmount] = useState(1000);
  let paymentDetails = {}
  paymentDetails.amount = amount;
  console.log("hello")
  return (
      <Block safe>
        <Block scroll showsVerticalScrollIndicator={true}
               contentContainerStyle={{paddingVertical: sizes.padding}}>
          <Block card radius={1} align={"center"}>
            <Block marginLeft={sizes.s}
                   row marginTop={sizes.sm} marginBottom={sizes.sm}>
              <FontAwesomeIcon icon={faWallet} color={colors.primaryBlue} size={24}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                  Available Wallet Balance
                </Text>
                <Text p size={sizes.h5} weight={weights.p} font={fonts.extrabold} h5 marginRight={sizes.m}>
                  &#x20B9;15
                </Text>
              </Block>
            </Block>
            <Block row>
              <Block marginTop={sizes.sm}>

                <Text h6 bold marginLeft={sizes.s} marginBottom={sizes.s}>
                  Amount to Add
                </Text>
                <Input inr id="upiId" inrNoSubmit placeholder={"1000"} color={colors.icon}
                       onChangeText={amount => setAmount(amount)}
                       keyboardType='number-pad' marginBottom={sizes.sm}/>

              </Block>
            </Block>
            <Block row radius={1} margin={sizes.sm}>
              <Button radius={1} flex={1} color={colors.primaryBlue}
                      onPress={() => navigation.navigate('PaymentOptions', {paymentDetails, type: "Wallet"})}
                      marginBottom={sizes.base}>
                <Text white bold transform="uppercase">
                  Proceed to Pay
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
  );
};

export default Wallet;
