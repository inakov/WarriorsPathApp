import PropTypes from 'prop-types';
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import Colors from "../../Colors";
import Text from "../text/Text";

const TextInput = props => {
    const { style, ...attributes } = props;

    return(
        <RNTextInput
            selectionColor={Colors.timberwolf}
            placeholderTextColor={Colors.magnesium}
            keyboardAppearance='dark'
            style={[
                styles.input,
                style && style,
            ]}
            {...attributes}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: Colors.timberwolf,
        height: 20,
    },
});

Text.propTypes = {
    style: PropTypes.any,
};

export default TextInput;
