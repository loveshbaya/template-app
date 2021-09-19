import { StackScreenProps } from '@react-navigation/stack';
import * as BarCodeScanner from 'expo-barcode-scanner';
import { BlurView } from 'expo-blur';
import { throttle } from 'lodash';
import React, {useState} from 'react';
import { Block, Button, Image, Input, Product, Text } from "../components";
import { Linking, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
import { useData, useTheme, useTranslation } from "../hooks";
import { AllStackRoutes } from '../navigation/Navigation.types';
import QRFooterButton from "../components/QRFooterButton";
import QRIndicator from "../components/QRIndicator";
import {useNavigation} from '@react-navigation/core';
import { NavigationHelpersContext } from '@react-navigation/native';

type State = {
    isVisible: boolean;
    url: null | string;
};

const initialState: State = { isVisible: Platform.OS === 'ios', url: null };
export default function BarCodeScreen(
    props: StackScreenProps<AllStackRoutes, 'Diagnostics'> & State
) {
    const navigation = useNavigation();
    const [state, setState] = React.useReducer(
        (props: State, state: Partial<State>): State => ({ ...props, ...state }),
        initialState
    );
    const [isLit, setLit] = React.useState(false);
    const { assets, colors, fonts, gradients, sizes } = useTheme();
    const [hasPermission, setHasPermission] = React.useState(null);
    const [qrcode, setQrcode] = useState([])

    React.useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (!state.isVisible) {
            timeout = setTimeout(() => {
                setState({ isVisible: true });
            }, 800);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    React.useEffect(() => {
        if (!state.isVisible && state.url) {
            openUrl(state.url);
        }
    }, [state.isVisible, state.url]);

    React.useEffect(() => { (async () => { const { status } = await Camera.requestPermissionsAsync(); setHasPermission(status === 'granted'); })(); }, []);




    const _handleBarCodeScanned = throttle(({ data: url }) => {
        setQrcode(qrcode => [...qrcode, url])
        console.log("url datas in qr scanner "+ JSON.stringify(qrcode) + "URL  : ", JSON.stringify(url))
        // setState({ isVisible: false, url });
        navigation.navigate('QRInfo',{url: url, qrcode: qrcode})
    }, 1000);

    const openUrl = (url: string) => {
        props.navigation.pop();

        setTimeout(
            () => {
                // note(brentvatne): Manually reset the status bar before opening the
                // experience so that we restore the correct status bar color when
                // returning to home
                StatusBar.setBarStyle('default');
                Linking.openURL(url);
            },
            Platform.select({
                ios: 16,
                // note(brentvatne): Give the modal a bit of time to dismiss on Android
                default: 500,
            })
        );
    };

    const onCancel = React.useCallback(() => {
        if (Platform.OS === 'ios') {
            props.navigation.pop();
        } else {
            props.navigation.goBack();
        }
    }, []);

    const onFlashToggle = React.useCallback(() => {
        setLit((isLit) => !isLit);
    }, []);

    const { top, bottom } = useSafeAreaInsets();

    return (
        <Block safe marginTop={sizes.s}>
            <View style={styles.container}>
                {state.isVisible ? (
                    <Camera
                        barCodeScannerSettings={{
                            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                        }}
                        onBarCodeScanned={_handleBarCodeScanned}
                        style={StyleSheet.absoluteFill}
                        flashMode={isLit ? 'torch' : 'off'}
                    />
                ) : null}

                <View style={[styles.header, { top: 40 + top }]}>
                    <Hint>Scan QR code</Hint>
                </View>

                <QRIndicator />

                <View style={[styles.footer, { bottom: 30 + bottom }]}>
                    <QRFooterButton onPress={onFlashToggle} isActive={isLit} iconName="ios-flashlight" />
                    <QRFooterButton onPress={onCancel} iconName="ios-close" iconSize={48} />
                </View>

                <StatusBar barStyle="light-content" backgroundColor="#000" />
            </View>
        </Block>
    );
}

function Hint({ children }: { children: string }) {
    return (
        <BlurView style={styles.hint} intensity={100} tint="dark">
            <Text p white={true}>{children}</Text>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hint: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
    },
});
