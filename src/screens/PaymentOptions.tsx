import React from 'react';
import {Platform, Vibration} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Text} from '../components';
import {useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const PaymentOptions = ({nav, route}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
    const {assets, colors, gradients, sizes} = useTheme();
  console.log("hello PaymentOptions",JSON.stringify(route.params))
  return (
      <Block marginTop={sizes.m}>
          <Block
              scroll
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingVertical: sizes.padding}}>
              <Block card padding={0} marginTop={sizes.s}>
                  <Image
                      background
                      resizeMode="cover"
                      source={assets.card1}>
                      <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                          <Text h4 white marginBottom={sizes.sm}>
                              Pay to {route.params.paymentDetails.merchantName}
                          </Text>
                          <Text h2 white marginBottom={sizes.sm}>
                              INR {route.params.paymentDetails.amount}
                          </Text>
                      </Block>
                  </Image>
              </Block>
              <Block safe radius={1} card paddingHorizontal={sizes.padding}>
                  <Text
                      h5
                      bold
                      secondary
                      marginTop={sizes.sm}>
                      PAY VIA APPs
                  </Text>
                  <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginTop={sizes.sm}
                      paddingHorizontal={sizes.xs}>
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[1, 0]}
                          start={[0, 1]}
                          gradient={gradients.divider}
                      />
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[0, 1]}
                          start={[1, 0]}
                          gradient={gradients.divider}
                      />
                  </Block>
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
                  <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginTop={sizes.xs}
                      paddingHorizontal={sizes.xs}>
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[1, 0]}
                          start={[0, 1]}
                          gradient={gradients.divider}
                      />
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[0, 1]}
                          start={[1, 0]}
                          gradient={gradients.divider}
                      />
                  </Block>
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
                  <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginTop={sizes.xs}
                      paddingHorizontal={sizes.xs}>
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[1, 0]}
                          start={[0, 1]}
                          gradient={gradients.divider}
                      />
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[0, 1]}
                          start={[1, 0]}
                          gradient={gradients.divider}
                      />
                  </Block>
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
                  <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginTop={sizes.xs}
                      paddingHorizontal={sizes.xs}>
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[1, 0]}
                          start={[0, 1]}
                          gradient={gradients.divider}
                      />
                      <Block
                          flex={0}
                          height={1}
                          width="50%"
                          end={[0, 1]}
                          start={[1, 0]}
                          gradient={gradients.divider}
                      />
                  </Block>
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
