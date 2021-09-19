import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Text} from '../components/';
import {useTheme, useTranslation} from '../hooks/';

const isAndroid = Platform.OS === 'android';

let mySet = new Set();

const QRInfo = (params) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  console.log("QRInfo called",params.route.params.url, "url datas : ", params.route.params.qrcode)


  const Cards = (data) => {
    const {assets, colors, gradients, sizes} = useTheme();
      let url = data.data;
      console.log("url is", url)
    return (

      <Block marginTop={sizes.m}  paddingHorizontal={sizes.padding}>
        {/* single card */}
        <Block>
          <Block card row>

            <Block padding={sizes.s} justify="space-between">
                <Text p>{url}</Text>
            </Block>
          </Block>
        </Block>
       </Block>
    );
  };



  return (
    <Block safe marginTop={sizes.md} marginBottom={sizes.md}>
      <Block scroll showsVerticalScrollIndicator={true}>
          {
              params.route.params.qrcode.map((data, index) =>{
                  console.log("data from for " + JSON.stringify(data))
                  return (
                      <Cards key={index} data={data}></Cards>
                  );
              })
          }
      </Block>

    </Block>
  );




};



export default QRInfo;
