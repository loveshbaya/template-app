import React from 'react';
import {StyleSheet, ViewStyle,} from 'react-native';

import useTheme from '../hooks/useTheme';
import {ISeparatorProps} from '../constants/types';
import {Block} from "./index";

const Separator = (props: ISeparatorProps) => {
    const {
        borderWidth,
        style,
    } = props;

    const separatorStyles = StyleSheet.flatten([
        style,
        {
            ...(borderWidth && {borderWidth: borderWidth})
        }
    ]) as ViewStyle;

    const {assets, gradients, colors, sizes, fonts, weights} = useTheme();

    return (
        <Block
            row
            flex={0}
            align="center"
            justify="center"
            marginTop={sizes.xs}
            paddingHorizontal={sizes.xs}>
            <Block
                flex={0}
                height={borderWidth}
                width="50%"
                end={[1, 0]}
                start={[0, 1]}
                gradient={gradients.divider}
            />
            <Block
                flex={0}
                height={borderWidth}
                width="50%"
                end={[0, 1]}
                start={[1, 0]}
                gradient={gradients.divider}
            />
        </Block>
    );
};

export default React.memo(Separator);


