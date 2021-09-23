import React from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';
import QRCode from "react-native-qrcode-svg";

const isAndroid = Platform.OS === 'android';

const PrePayment = ({nav, route}) => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const {assets, colors, sizes} = useTheme();
    const {user} = useData();
    const merchantName = "Sumit Suthar"
    const buisness = "Timber"
    const contact = "9929496321"
    const email = "sumit@k2io.com"
    var data;
    switch (route.params.type) {
        case 'UPI':
            data = route.params.upiId;
            break;
        case 'QRScan':
            data = route.params.url;
            break;
        case 'PhonePay':
            data = route.params.phoneNumber;
            break;
    }

    console.log("Data from : ", route.params.type, " is ", data);
    var qrcode = data + "@" + merchantName + "@" + buisness + "@" + contact + "@" + email;
    return (
        <Block safe marginTop={sizes.md} marginBottom={sizes.md} paddingHorizontal={sizes.padding}>
            <Block scroll showsVerticalScrollIndicator={true}>
                <Block card marginTop={sizes.sm} align={"center"} color={'#ADD8E6'}>
                    <Image
                        width={110}
                        height={110}
                        marginBottom={sizes.sm}
                        source={{uri: user?.avatar}}
                        radius={1000}
                    />
                    <Text h5 center>
                        Sumit Suthar
                    </Text>
                    <Text p center>
                        {user?.department}
                    </Text>
                    <Text h6 bold center>
                        susu@oksbi
                    </Text>
                    <Text h6 bold center>
                        9929496321
                    </Text>
                    <Block card marginTop={sizes.sm} align={"center"} radius={1} color={'#ADD8E6'}>
                        <QRCode size={168} value={qrcode}>
                        </QRCode>
                    </Block>
                </Block>
            </Block>
        </Block>
    );
};

export default PrePayment;
