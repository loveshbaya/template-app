import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Text} from '../components/';

import {
    faCoffee,
    faDumbbell,
    faGift,
    faHotel,
    faPills,
    faShoePrints,
    faShoppingBag,
    faStore,
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
          <Block scroll showsVerticalScrollIndicator={true}
                 contentContainerStyle={{paddingVertical: sizes.padding}}>
              <Block card radius={1} align={"center"}>
                  <Block row marginTop={sizes.m} radius={1}>
                  <Block marginLeft={sizes.sm} marginRight={sizes.sm}>
                      <Block row justify={"space-evenly"} marginBottom={sizes.m}>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faCoffee}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Cafe
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faDumbbell}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  GYM
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faUtensils}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Restaurants
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faHotel}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Hotels
                              </Text>
                          </Block>

                      </Block>

                      <Block row justify={"space-evenly"} marginBottom={sizes.m}>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faShoePrints}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Shoes
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faTshirt}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Clothes
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}  >
                              <FontAwesomeIcon size={sizes.md} icon={faShoppingBag}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Accessories
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}  >
                              <FontAwesomeIcon size={sizes.md} icon={faGift}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                              Gifts
                              </Text>
                          </Block>

                      </Block>
                      <Block row justify={"space-evenly"} marginBottom={sizes.m}>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faShoppingBag}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Accessories
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faGift}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Gifts
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faPills}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Pharmacy
                              </Text>
                          </Block>
                          <Block style={{maxWidth: 65}} align={"center"}>
                              <FontAwesomeIcon size={sizes.md} icon={faStore}></FontAwesomeIcon>
                              <Text align={"center"} marginTop={sizes.s} lineHeight={17} font={fonts.p} size={11} p>
                                  Others
                              </Text>
                          </Block>
                      </Block>

                  </Block>
              </Block>
              </Block>
          </Block>
      </Block>
  );
};

export default Services;
