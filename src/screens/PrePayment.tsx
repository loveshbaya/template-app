import React, {useState} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Block, Image, Input, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';
import QRCode from "react-native-qrcode-svg";
// import { faCoffee, faArrowRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const isAndroid = Platform.OS === 'android';

const PrePayment = ({nav, route}) => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const {assets, colors, sizes} = useTheme();
    const {user} = useData();
    const merchantName = "Sumit Suthar"
    const business = "Timber"
    const contact = "9929496321"
    const email = "sumit@k2io.com"
    const [amount, setAmount] = useState(0)

    let paymentDetails = {}
    paymentDetails.merchantName = merchantName;
    paymentDetails.business = business;
    paymentDetails.contact = contact;
    paymentDetails.email = email;
    paymentDetails.amount = amount;


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

    function methoddd() {
        return (() => alert("touched"));
    }

    console.log("Data from : ", route.params.type, " is ", data);
    var qrcode = data + "@" + merchantName + "@" + business + "@" + contact + "@" + email;
    return (
        <Block scroll showsVerticalScrollIndicator={true}>
            <Block radius={1} card align={"center"} marginTop={sizes.sm}>
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
                <Block style={{borderWidth: 1, borderColor: colors.icon}} marginTop={sizes.sm} align={"center"}
                       radius={1} color={colors.icon}>
                        <QRCode size={168} value={qrcode}>
                        </QRCode>
                    </Block>
                </Block>
                <Block align={"center"}>
                    <Block card marginTop={sizes.sm} width={300}>

                        <Text h6 bold center marginBottom={sizes.s}>
                            Enter Amount to Pay
                        </Text>
                        <Block justify={"space-evenly"}>
                            <Input inr id="upiId" placeholder={"0"}
                                   onIconTouchStart={() => navigation.navigate('PaymentOptions', {
                                       paymentDetails,
                                       type: "Merchant"
                                   })}
                                   onChangeText={amount => setAmount(amount)}
                                   keyboardType='number-pad' marginBottom={sizes.sm}/>
                        </Block>
                    </Block>
                </Block>
                {/*<Block align={"center"}>
                    <Button flex={1} marginBottom={sizes.base}>
                        <Text color={colors.primaryBlue} bold transform="uppercase">
                            Proceed to Pay
                        </Text>
                    </Button>
                </Block>*/}

            </Block>
    );
};

export default PrePayment;
