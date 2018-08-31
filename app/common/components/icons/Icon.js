import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Colors';
import resolveIconType from './resolveIconType';
import TouchableItem from "../touchable/TouchableItem";

const Icon = (props) => {
    const {
        type,
        name,
        color,
        size,
        onPress,
        onLongPress,
        containerStyle,
        ...attributes
    } = props;

    const Component = onPress || onLongPress ? TouchableItem : View;
    const iconType = type ? type : 'material-community';
    const Icon = resolveIconType(iconType);

    return (
        <Component
            {...attributes}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
                styles.container,
                containerStyle && containerStyle
            ]}
        >
            <Icon
                name={name}
                color={color}
                size={size}
            />
        </Component>
    );
};

Icon.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    onPress: PropTypes.funcion,
    onLongPress: PropTypes.func,
};

Icon.defaultProps = {
    size: 18,
    color: Colors.magnesium,
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Icon
