import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Separator, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";

const isAndroid = Platform.OS === 'android';

const TransactionDetail = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes, fonts, weights} = useTheme();
  const {user} = useData();
  return (
      <Block safe>
        <Block scroll showsVerticalScrollIndicator={true}
               contentContainerStyle={{paddingVertical: sizes.padding}}>
          <Block card radius={1} align={"center"}>
            <Image
                width={70}
                height={70}
                marginBottom={sizes.sm}
                source={{uri: user?.avatar}}
                radius={1000}
            />
            <Text p>
              ABC Medicals - Lovesh Baya
            </Text>
            <Text font={fonts.p} size={sizes.h3} weight={weights.p} h3>
              &#x20B9;15,340
            </Text>
            <Block row>
              <FontAwesomeIcon size={15} style={{marginRight: "1.4%", marginTop: "1%"}} icon={faCheckCircle}
                               color={colors.success}></FontAwesomeIcon>
              <Text font={fonts.thin} size={12} weight={weights.p} p>
                Successful on 18 Sept 2021, 10:58AM
              </Text>
            </Block>
          </Block>

          <Block card radius={1} marginTop={sizes.sm}>
            <Block margin={sizes.sm}>
              <Block marginBottom={sizes.sm}>
                <Text p font={fonts.h5}>
                  UPI Transaction ID
                </Text>
                <Text p font={fonts.thin}>
                  1276235462335456
                </Text>
              </Block>
              <Separator borderWidth={1}></Separator>
              <Block marginBottom={sizes.sm} marginTop={sizes.sm}>
                <Text p font={fonts.h5}>
                  To : Sumit Suthar - R Timber
                </Text>
                <Text p font={fonts.thin}>
                  sumit.suthar@okicici
                </Text>
              </Block>
              <Separator borderWidth={1}></Separator>
              <Block marginBottom={sizes.sm} marginTop={sizes.sm}>
                <Text p font={fonts.h5}>
                  From : Lovesh Baya
                </Text>
                <Text p font={fonts.thin}>
                  lovesh@okicici
                </Text>
              </Block>
              <Separator borderWidth={1}></Separator>
              <Block marginBottom={sizes.sm} marginTop={sizes.sm}>
                <Text p font={fonts.h5}>
                  Reference ID
                </Text>
                <Text p font={fonts.thin}>
                  df543412dfs-dsf4543554sfd
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
    </Block>
  );
};

export default TransactionDetail;
