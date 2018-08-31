'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import Colors from "../../Colors";
import ListItem from "../list/items/ListItem";

const NonSelectedItem = ({ label, selected }) => {
    return (
        <ListItem
            onPress={() => selected()}
            title={label}
            content={{
                title: label,
                hideIcon: true,
            }}
        />
    );
};

const SelectedItem = ({ label, selected }) => {
    return(
        <ListItem
            onPress={() => selected()}
            title={label}
            rightIcon={{
                name: 'check',
                color: Colors.green,
            }}
        />
    );
};

const ItemSelector = ({ items, onItemSelected, containerStyle }) => {
    return (
        <FlatList
            style={[
                styles.container,
                containerStyle && containerStyle
            ]}
            data={items}
            renderItem={({item}) => item.selected
                ? <SelectedItem
                    label={item.label}
                    selected={() => onItemSelected(item.value)}
                />
                : <NonSelectedItem
                    label={item.label}
                    selected={() => onItemSelected(item.value)}
                />
              }
        />
    );
};

NonSelectedItem.propTypes = {
    label: PropTypes.string.isRequired,
    selected: PropTypes.func.isRequired
};

SelectedItem.propTypes = {
    label: PropTypes.string.isRequired,
    selected: PropTypes.func.isRequired
};

ItemSelector.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            selected: PropTypes.bool,
            value: PropTypes.any
        })
    ),
    onItemSelected: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});

export default ItemSelector;
