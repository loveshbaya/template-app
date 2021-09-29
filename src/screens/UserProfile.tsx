import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Text,Image} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';

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
                <Block row >
                    <Block card radius={1}>
                        <Block padding={sizes.s} justify="space-between">
                            <Text font={fonts.p} size={sizes.h5} weight={weights.p} h4>
                                Lovesh Baya
                            </Text>
                            <Text p>
                                +91-8384997222
                            </Text>
                            <Text p>
                                lovesh.baya
                            </Text>
                        </Block>
                    </Block>

                <Block card radius={1} align='center' >
                    <Block padding={sizes.s} justify="center">
                            <Image
                                width={70}
                                height={70}
                                source={{uri: user?.avatar}}
                                radius={100}
                            />
                        </Block>
                </Block>
            </Block>

            <Block card row marginTop={sizes.m} justify='space-between'>
                    <Text p font={fonts.p} size={sizes.h5} weight={weights.p} h4>
                                Wallet Balance
                    </Text>
                    <Text p font={fonts.p} size={sizes.h6} weight={weights.p} h5 marginRight={sizes.m}>
                               15 INR
                    </Text>
            </Block>

            <Block card row marginTop={sizes.m} justify='space-between'>
                    <Text p font={fonts.p} size={sizes.h5} weight={weights.p} h4>
                                CashBack History
                    </Text>
                    
            </Block>     
        </Block>
    </Block>
    );
};

export default UserProfile;
