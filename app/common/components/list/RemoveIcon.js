import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import Colors from "../../Colors";

const RemoveIcon = (props) => {
    const {
        size,
        minusColor,
        circleColor,
        containerStyle,
        onPress,
    } = props;

    const circleStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: circleColor
    };

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            style={[styles.container, containerStyle && containerStyle]}
        >
            <View style={[styles.circle, circleStyle]}>
                <View style={[styles.minus, {backgroundColor: minusColor}]}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

RemoveIcon.defaultProps = {
    size: 20,
    minusColor: Colors.white,
    circleColor: Colors.red,
};

RemoveIcon.propTypes = {
    size: PropTypes.number,
    minusColor: PropTypes.any,
    cColor: PropTypes.any,
    containerStyle: PropTypes.any,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    circle: {
        marginHorizontal: 15,
        justifyContent: 'center'
    },
    minus: {
        height: 1,
        marginHorizontal: 4
    }
});

export default RemoveIcon;