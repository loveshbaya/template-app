import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import {AntDesign, Ionicons} from "@expo/vector-icons";

import {
    faAngleRight,
    faClone,
    faCoffee,
    faDumbbell,
    faGift,
    faHotel,
    faPills,
    faShoePrints,
    faShoppingBag,
    faShoppingBasket,
    faTshirt,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";


const isAndroid = Platform.OS === 'android';

const Services = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
    const {assets, colors, sizes, fonts, weights} = useTheme();
  console.log("hello")

  return (
      <Block safe>
        <Block row marginTop={sizes.m}  radius={1}>
                  <Block marginLeft={sizes.sm} marginRight={sizes.sm}>
                      <Block row justify={"space-evenly"} marginBottom={sizes.m}>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faCoffee} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Cafe
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faDumbbell} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  GYM
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faUtensils} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Restaurants
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faHotel} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Hotels
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faPills} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Pharmacy
                              </Text>
                          </Block>
                      </Block>
                      
                      <Block row justify={"space-evenly"} marginBottom={sizes.m}>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faShoePrints} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Shoes
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faTshirt} color={colors.icon}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Clothes
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}  >
                              <FontAwesomeIcon size={sizes.md} icon={faShoppingBag} color={colors.icon} onPress={() => navigation.navigate('Services')} ></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Accessories
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}  >
                              <FontAwesomeIcon size={sizes.md} icon={faGift} color={colors.icon} onPress={() => navigation.navigate('Services')} ></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Gifts
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}  >
                              <FontAwesomeIcon size={sizes.md} icon={faGift} color={colors.icon} onPress={() => navigation.navigate('Services')} ></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Gifts
                              </Text>
                          </Block>
                      </Block>

                  </Block>
              </Block>
      </Block>
  );
};

export default Services;
