import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Text} from '../components/';
import {useTheme, useTranslation} from '../hooks/';

const isAndroid = Platform.OS === 'android';

const UserProfile = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const {assets, colors, sizes, fonts, weights} = useTheme();
    console.log("On User profile")
    return (
        <Block safe marginTop={sizes.md}>
            <Block
                scroll
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: sizes.padding}}>
                <Block row>
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
                </Block>
                <Block row marginTop={sizes.sm}>
                    <Text style={{width: '100%'}} h5 marginLeft={sizes.md}>
                        Lovesh Baya
                    </Text>
                    <Text p marginLeft={sizes.md}>
                        loves.baya
                    </Text>
                </Block>
            </Block>
        </Block>
    );
};

export default UserProfile;
