import React from "react";
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../../Colors";

const List = ({ addSeparator, children, style, ...attributes }) => {

    let childrenWithSeparator = children;

    if (addSeparator) {
        const childrenCount = React.Children.count(children);
        childrenWithSeparator = React.Children.map(children, (child, index) => {
            if (index + 1 < childrenCount) {
                return React.cloneElement(child, { addSeparator: addSeparator });
            } else {
                return child;
            }
        });
    }

    return (
        <View
            {...attributes}
            style={[styles.listContainer, style]}
        >
            {childrenWithSeparator}
        </View>
    );
};

List.propTypes = {
    addSeparator: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.any,
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
        marginBottom: 20,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: Colors.matterhorn,
        backgroundColor: Colors.nero,
    },
});

export default List;