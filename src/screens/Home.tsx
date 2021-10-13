import React, {useState} from 'react';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";

import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import CardFlip from "react-native-card-flip";

const Home = () => {
  const {t} = useTranslation();
    const {assets, colors, fonts, gradients, sizes, weights} = useTheme();
  const navigation = useNavigation();
    const [flipCard, setFlipCard] = useState();
    var dataMap = [{}, {}, {}, {}, {}];
    var flipMap = new Map()

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
              </Block>
              <Block marginTop={sizes.s} card radius={1}>
                  <Block row marginLeft={sizes.md} marginBottom={sizes.sm}>
                      <FontAwesomeIcon icon={faAngleRight} color={colors.icon}
                                       style={{marginLeft: sizes.xs, marginTop: sizes.s}}></FontAwesomeIcon>
                      <Text marginTop={sizes.s} font={fonts.helveticaRegular} h5>
                          Services
                      </Text>
                  </Block>
                  <Block row justify="space-evenly" marginLeft={sizes.sm} marginRight={sizes.sm}>

                  </Block>
              </Block>
              <Block marginTop={sizes.s} card radius={1}>
                  <Block row marginLeft={sizes.md} marginBottom={sizes.sm}>
                      <FontAwesomeIcon icon={faAngleRight} color={colors.icon}
                                       style={{marginLeft: sizes.xs, marginTop: sizes.s}}></FontAwesomeIcon>
                      <Text marginTop={sizes.s} font={fonts.helveticaRegular} h5>
                          Rewards
                      </Text>
                  </Block>
                  <Block marginLeft={sizes.sm} marginRight={sizes.sm}>
                      {
                          dataMap.map((value, index) => {
                              console.log(index, value);
                              if (index % 2 == 0 && dataMap.length >= index + 2) {
                                  return (
                                      <Block row justify="space-evenly" marginBottom={sizes.sm}>
                                          <CardFlip flipDirection={'y'} duration={500} style={{
                                              minHeight: 130,
                                              minWidth: sizes.width * 0.4,
                                              maxHeight: 200,
                                              maxWidth: sizes.width * 0.4
                                          }} ref={card => flipMap.set(index, card)}>
                                              <Block card marginRight={sizes.sm}
                                                     onTouchStart={() => flipMap.get(index).flip()}>
                                                  <Image
                                                      resizeMode="cover"
                                                      source={assets?.card2}
                                                      width={"100%"}
                                                  />
                                              </Block>
                                              <Block card onTouchStart={() => flipMap.get(index).flip()}>
                                                  <Image
                                                      resizeMode="cover"
                                                      source={assets?.card3}
                                                      width={"100%"}
                                                  />
                                              </Block>
                                          </CardFlip>
                                          <CardFlip flipDirection={'y'} duration={500} style={{
                                              minHeight: 130,
                                              minWidth: sizes.width * 0.4,
                                              maxHeight: 200,
                                              maxWidth: sizes.width * 0.4
                                          }} ref={card => flipMap.set(index + 1, card)}>
                                              <Block card marginRight={sizes.sm}
                                                     onTouchStart={() => flipMap.get(index + 1).flip()}>
                                                  <Image
                                                      resizeMode="cover"
                                                      source={assets?.card2}
                                                      width={"100%"}
                                                  />
                                              </Block>
                                              <Block card onTouchStart={() => flipMap.get(index).flip()}>
                                                  <Image
                                                      resizeMode="cover"
                                                      source={assets?.card3}
                                                      width={"100%"}
                                                  />
                                              </Block>
                                          </CardFlip>
                                      </Block>
                                  );
                              } else if (index % 2 == 0) {
                                  return (
                                      <Block row justify="center" marginBottom={sizes.sm}>
                                          <CardFlip flipDirection={'y'} duration={500} style={{
                                              minHeight: 130,
                                              minWidth: sizes.width * 0.4,
                                              maxHeight: 200,
                                              maxWidth: sizes.width * 0.4
                                          }} ref={card => flipMap.set(index, card)}>
                                              <Block card marginRight={sizes.sm}
                                                     onTouchStart={() => flipMap.get(index).flip()}>
                                                  <Image
                                                      resizeMode="cover"
                                                      source={assets?.card2}
                                                      width={"100%"}
                                                  />
                                              </Block>
                                              <Block card onTouchStart={() => flipMap.get(index).flip()}>
                                                  <Image
                                                      resizeMode="cover"
                                                      source={assets?.card3}
                                                      width={"100%"}
                                                  />
                                              </Block>
                                          </CardFlip>
                                      </Block>
                                  );
                              }

                          })
                      }
                  </Block>
              </Block>
          </Block>
      </Block>
  );
};



export default Home;
