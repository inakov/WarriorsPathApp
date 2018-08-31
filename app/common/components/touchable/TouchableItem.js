"use strict";

import React from "react";
import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from "react-native";

const ANDROID_VERSION_LOLLIPOP = 21;

const TouchableItem = props => {
    if (
        Platform.OS === 'android' &&
        Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
        const { style, ...attributes } = props;
        return (
            <TouchableNativeFeedback
                {...attributes}
                style={null}
                background={TouchableNativeFeedback.Ripple(
                    this.props.pressColor,
                    this.props.borderless
                )}
            >
                <View style={style}>{React.Children.only(props.children)}</View>
            </TouchableNativeFeedback>
        );
    }

    return (<TouchableOpacity {...props}>{props.children}</TouchableOpacity>);
};

TouchableItem.defaultProps = {
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)',
};

export default TouchableItem;