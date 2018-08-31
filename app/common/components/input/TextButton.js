"use strict";

import React from "react";
import {
    Text,
    View,
    Platform,
    StyleSheet,
} from "react-native";

import TouchableItem from '../touchable/TouchableItem';
import Fonts from "../../Fonts";
import Colors from "../../Colors";

const TextButton = props => {
    const {
        onPress,
        pressColorAndroid,
        title,
        titleStyle,
        containerStyle,
        color,
        disabled,
        disabledColor,
        textAttributes,
    } = props;

    return (
        <TouchableItem
            accessibilityComponentType="button"
            accessibilityLabel={title}
            accessibilityTraits="button"
            delayPressIn={0}
            onPress={onPress}
            pressColor={pressColorAndroid}
            style={[styles.container, containerStyle && containerStyle]}
            disabled={disabled}
            borderless
        >
            <View style={styles.container}>
                <Text
                    style={[
                        styles.title,
                        !!color && { color: color },
                        disabled && { color: disabledColor },
                        titleStyle,
                    ]}
                    numberOfLines={1}
                    {...textAttributes}
                >
                    {title}
                </Text>
            </View>
        </TouchableItem>
    );
};

TextButton.defaultProps = {
    pressColorAndroid: 'rgba(0, 0, 0, .32)',
    color: Platform.select({
        ios: Colors.primaryText,
    }),
    disabledColor: Colors.matterhorn,
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: Fonts.normalize(17),
        paddingRight: 10,
    },
});

export default TextButton;
