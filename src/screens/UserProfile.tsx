import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Separator, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';
import {faCheckCircle, faCoins, faExclamationTriangle, faHistory, faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const isAndroid = Platform.OS === 'android';

const UserProfile = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const {user} = useData();
    const {assets, colors, sizes, fonts, weights} = useTheme();
    console.log("On User profile")
    return (
        <Block safe marginTop={sizes.md}>
            <Block
                scroll
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: sizes.padding}}>
                <Block card radius={1}>
                    <Block row marginBottom={sizes.m}>
                        <Block marginTop={sizes.s} marginLeft={sizes.md} padding={sizes.s} justify="space-between">
                            <Text font={fonts.thin} size={sizes.h4} weight={weights.p} h4>
                                Lovesh Baya
                            </Text>
                            <Text p>
                                +91-8384997222
                            </Text>
                            <Text p>
                                lovesh.baya
                            </Text>
                        </Block>

                        <Block align='flex-end'>
                            <Block padding={sizes.s} justify="center" marginRight={sizes.m}>
                                <Image
                                    width={70}
                                    height={70}
                                    source={{uri: user?.avatar}}
                                    radius={100}
                                />
                            </Block>
                        </Block>
                    </Block>
                    <Block marginLeft={sizes.s} row marginTop={sizes.sm} marginBottom={sizes.sm}>
                        <FontAwesomeIcon icon={faWallet} color={colors.primaryBlue} size={24}></FontAwesomeIcon>
                        <Block row justify='space-between'>
                            <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                                Wallet Balance
                            </Text>
                            <Text p size={sizes.h5} weight={weights.p} font={fonts.extrabold} h5 marginRight={sizes.m}>
                                &#x20B9;15
                            </Text>
                        </Block>
                    </Block>

                    <Separator borderWidth={2}></Separator>
                    <Block marginLeft={sizes.s} row marginTop={sizes.sm} marginBottom={sizes.sm}>
                        <FontAwesomeIcon icon={faCoins} color={colors.primaryBlue} size={24}></FontAwesomeIcon>
                        <Block row justify='space-between'>
                            <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                                CashBack Earned
                            </Text>
                            <Text p color={colors.primaryBlue} size={sizes.h5} weight={weights.p} h5
                                  marginRight={sizes.m}>
                                386
                            </Text>
                        </Block>
                    </Block>
                </Block>

                <Block card radius={1} marginTop={sizes.sm} marginBottom={sizes.sm}>
                    <Block row justify='space-between' marginBottom={sizes.s} marginRight={sizes.sm}>
                        <Text p marginLeft={sizes.sm} font={fonts.p} weight={weights.p} h4>
                            Transaction History
                        </Text>
                        <FontAwesomeIcon icon={faHistory} color={colors.primaryBlue} size={24}></FontAwesomeIcon>
                    </Block>
                    <Separator borderWidth={2}></Separator>
                    <Block row marginTop={sizes.sm} marginBottom={sizes.s} marginLeft={sizes.s} marginRight={sizes.sm}>
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

export default UserProfile;
