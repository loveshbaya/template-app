import {useData, useTheme, useTranslation} from "../hooks";
import React, {useCallback, useState, useEffect} from "react";

import { StyleSheet } from 'react-native';
import {Block, Button, Image, Input, Product, Text} from "../components";
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScanner = () => {
    const {t} = useTranslation();
    const {assets, colors, fonts, gradients, sizes} = useTheme();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            if ('granted' !== status) {
                alert(`This app require camera permission to work.`);
            }
            setHasPermission('granted' === status);
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Block safe marginTop={sizes.md}>
            {/* search input */}
            <Block marginTop={sizes.xl} color={colors.card} flex={3} padding={sizes.padding}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </Block>
            <Block color={colors.card} flex={1} padding={sizes.padding}>
                {scanned && <Button onPress={() => setScanned(false)}>
                    <Block row align="center">
                        <Text p >
                            {'Tap to scan again'}
                        </Text>
                    </Block>
                </Button>}
            </Block>

        </Block>
    );
};

export default QRScanner;
