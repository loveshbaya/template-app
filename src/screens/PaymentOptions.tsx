import React from 'react';
import {Platform, Vibration} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Separator, Text} from '../components';
import {useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const PaymentOptions = ({nav, route}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
    const {assets, colors, gradients, sizes, fonts} = useTheme();
  console.log("hello PaymentOptions",JSON.stringify(route.params))
    var topText;
    var money = route.params.paymentDetails.amount;
    switch (route.params.type) {
        case 'Wallet':
            topText = "Add to Wallet";
            break;
        case 'Merchant':
            topText = "Pay to " + route.params.paymentDetails.merchantName;
            break;
    }
  return (
      <Block>
          <Block
              scroll
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingVertical: sizes.padding}}>
              <Block card padding={0}>
                  <Image
                      background
                      resizeMode="cover"
                      source={assets.card1}>
                      <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                          <Text h4 white marginBottom={sizes.sm}>
                              {topText}
                          </Text>
                          <Text h2 white marginBottom={sizes.sm}>
                              INR {route.params.paymentDetails.amount}
                          </Text>
                      </Block>
                  </Image>
              </Block>
              <Block safe radius={1} card paddingHorizontal={sizes.padding}>
                  <Text marginBottom={sizes.s}
                        h5
                        bold
                        secondary
                        font={fonts.thin}
                        marginTop={sizes.sm}>
                      Select Application to proceed
                  </Text>
                  <Separator borderWidth={1}></Separator>
                  <Block row marginTop={sizes.sm} marginLeft={sizes.sm} marginBottom={sizes.xs}>
                      <Image
                          source={assets.gpay}
                          style={{width: sizes.md, height: sizes.md, borderRadius: sizes.s}}
                      />
                      <Block marginLeft={sizes.m}>
                          <Text p semibold>
                              Google Pay
                          </Text>
                      </Block>
                  </Block>
                  <Separator borderWidth={1}></Separator>
                  <Block row marginTop={sizes.sm} marginLeft={sizes.sm} marginBottom={sizes.xs}>
                      <Image
                          source={assets.paytm}
                          style={{width: sizes.md, height: sizes.md, borderRadius: sizes.s}}
                      />
                      <Block marginLeft={sizes.m}>
                          <Text p semibold>
                              PayTM
                          </Text>
                      </Block>
                  </Block>
                  <Separator borderWidth={1}></Separator>
                  <Block row marginTop={sizes.sm} marginLeft={sizes.sm} marginBottom={sizes.xs}>
                      <Image
                          source={assets.phonepe}
                          style={{width: sizes.md, height: sizes.md, borderRadius: sizes.s}}
                      />
                      <Block marginLeft={sizes.m}>
                          <Text p semibold>
                              PhonePe
                          </Text>
                      </Block>
                  </Block>
                  <Separator borderWidth={1}></Separator>
                  <Block row onTouchStart={() => {
                      Vibration.vibrate(200);
                      console.log("maza aagya")
                  }} marginTop={sizes.sm} marginLeft={sizes.sm} marginBottom={sizes.xs}>
                      <Image
                          source={assets.bhim}
                          style={{width: sizes.md, height: sizes.md, borderRadius: sizes.s}}
                      />
                      <Block marginLeft={sizes.m}>
                          <Text p semibold>
                              BHIM
                          </Text>
                      </Block>
                  </Block>
              </Block>
          </Block>
    </Block>
  );
};

export default PaymentOptions;
