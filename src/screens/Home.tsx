import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image} from '../components/';
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();

  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

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
