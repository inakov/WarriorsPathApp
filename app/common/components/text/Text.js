import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText, StyleSheet, Platform } from 'react-native';
import Colors from "../../Colors";

const Text = props => {
    const { style, children, ...attributes } = props;

    return (
        <RNText
            style = {[
                styles.text,
                style && style,
            ]}
            {...attributes}
        >
            {children}
        </RNText>
    );
};

Text.propTypes = {
    style: PropTypes.any,
    children: PropTypes.any,
};

const styles = StyleSheet.create({
   text: {
     color: Colors.primaryText
   },
});

export default Text;

