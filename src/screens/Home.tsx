import React from 'react';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const Home = () => {
  const {t} = useTranslation();
    const {assets, colors, fonts, gradients, sizes, weights} = useTheme();
  const navigation = useNavigation();

  return (
      <Block safe>
          <Block scroll showsVerticalScrollIndicator={true}
                 contentContainerStyle={{paddingVertical: sizes.padding}}>
              <Block card radius={1}>
                  <Block row marginLeft={sizes.md} marginBottom={sizes.sm}>
                      <FontAwesomeIcon icon={faAngleRight} color={colors.icon}
                                       style={{marginLeft: sizes.xs, marginTop: sizes.s}}></FontAwesomeIcon>
                      <Text marginTop={sizes.s} font={fonts.helveticaRegular} h5>
                          Transfer Money
                      </Text>
                  </Block>
                  <Block row justify="space-evenly">
                      <Block style={{maxWidth: 72}} align={"center"}>
                          <Button color={colors.primaryBlue} style={{
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
                          <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={15} p>
                              Scan & Pay
                          </Text>
                      </Block>
                      <Block style={{maxWidth: 72}} align={"center"}>
                          <Button color={colors.primaryBlue} style={{
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
                          <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={15} p>
                              Phone Number
                          </Text>
                      </Block>
                      <Block style={{maxWidth: 72}} align={"center"}>
                          <Button color={colors.primaryBlue} style={{
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
                          <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={15} p>
                              UPI Transfer
                          </Text>
                      </Block>
                  </Block>
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
