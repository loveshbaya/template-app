import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';

const isAndroid = Platform.OS === 'android';

const QRInfo = (urlObj) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  console.log("QRInfo called",urlObj)


  const Cards = () => {
    const {assets, colors, gradients, sizes} = useTheme();
  
    return (
      <Block marginTop={sizes.m}  paddingHorizontal={sizes.padding}>
        {/* single card */}
        <Block>
          <Block card row>
            
            <Block padding={sizes.s} justify="space-between">
              <Text p>{JSON.stringify(urlObj)}</Text>
            </Block>
          </Block>
        </Block>
       </Block>
    );
  };



  return ( 
    <Block safe marginTop={sizes.md} marginBottom={sizes.md}>
      <Block scroll showsVerticalScrollIndicator={true}>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      </Block>
      
    </Block>
  );




};



export default QRInfo;
