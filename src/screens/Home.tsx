import React from 'react';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image} from '../components/';
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

const Home = () => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();

  return (
    <Block>

      <Block
          row
          flex={0}
          align="center"
          justify="center"
          color={colors.card}
          paddingBottom={sizes.sm}>
      <Block row justify="space-evenly">

        <Button color="#4c8bf5" style={{
              width: sizes.socialSize,
              height: sizes.socialSize,
              borderRadius: sizes.socialRadius
        }} onPress={() => navigation.navigate('QRScanner')}>
          <Ionicons
              name="qr-code"
              size={sizes.socialIconSize}
              color={colors.white}
          />
        </Button>

        <Button color="#4c8bf5" style={{
          width: sizes.socialSize,
          height: sizes.socialSize,
          borderRadius: sizes.socialRadius
        }} onPress={() => navigation.navigate('PhonePay')}>
          <AntDesign
              name="contacts"
              size={sizes.socialIconSize}
              color={colors.white}
          />
        </Button>

        <Button color="#4c8bf5" style={{
          width: sizes.socialSize,
          height: sizes.socialSize,
          borderRadius: sizes.socialRadius
        }} onPress={() => navigation.navigate('UpiPay')}>
          <Image
              source={assets.upi}
              height={sizes.m}
              width={sizes.m}
          />
        </Button>
        {/*<TouchableOpacity
          <Ionicons
              name={qr-code}
              size={sizes.socialIconSize}
              color={colors.white}
          />
        </TouchableOpacity>*/}
      </Block>
      </Block>
      {/* toggle products list */}


    </Block>
  );
};



export default Home;
