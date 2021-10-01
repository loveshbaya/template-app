import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Separator, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';
import {faCoins, faWallet} from "@fortawesome/free-solid-svg-icons";
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
                                INR 15
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

        </Block>
    </Block>
    );
};

export default UserProfile;
