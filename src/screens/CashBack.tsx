import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Separator, Text} from '../components';
import {useTheme, useTranslation} from '../hooks';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCheckCircle, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

const isAndroid = Platform.OS === 'android';

const CashBack = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, fonts, weights, sizes} = useTheme();
  console.log("hello CashBack")
  return (
      <Block safe>
        <Block
            scroll
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: sizes.padding}}>
          <Block card radius={1} marginBottom={sizes.sm}>
            <Block row marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Sumit Suthar
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  + &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{marginTop: '2%'}} color={colors.danger}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Sumit Suthar
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
            <Separator borderWidth={1}></Separator>
            <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginTop: '2%'}} color={colors.success}
                               size={26}></FontAwesomeIcon>
              <Block row justify='space-between'>
                <Block>
                  <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                    Lorem Epsum
                  </Text>
                  <Text p marginLeft={sizes.sm} size={12} font={fonts.thin} weight={weights.p} h4>
                    18 Sept 2021
                  </Text>
                </Block>
                <Text p marginLeft={sizes.sm} font={fonts.p} marginTop={10} weight={weights.p} h4>
                  - &#x20B9;1500
                </Text>
              </Block>
            </Block>
          </Block>

        </Block>
    </Block>
  );
};

export default CashBack;
