'use strict';

import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import Icon from '../../common/components/icons/Icon';
import TextInput from '../../common/components/input/TextInput';
import ListItem from '../../common/components/list/items/ListItem';
import { connect } from 'react-redux';

const AddWorkoutScreen = (props) => {
    return (
        <ScrollView
            style={styles.container}
            keyboardDismissMode={'on-drag'}
        >
            <View
                style={styles.titleContainer}
            >
                <WorkoutImage />
                <TextInput
                    style={styles.name}
                    multiline={true}
                    placeholder={'Workout name'}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <TextInput
                    style={styles.description}
                    multiline={true}
                    placeholder={'Description'}
                />
            </View>
            <ListItem
                title={'Add Exercises'}
                leftIcon={{
                    name: 'plus',
                    type: 'entypo',
                    size: 13,
                    color: Colors.white,
                    containerStyle: {
                        padding: 0,
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        backgroundColor: Colors.green,
                    },
                }}
            />
        </ScrollView>
    );
};

const WorkoutImage = (props) => {
    return (
        <View style={styles.imageContainer}>
            <Icon name={"camera"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
    },
    imageContainer: {
        backgroundColor: Colors.nero,
        width: 130,
        height: 130,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    name: {
        marginLeft: 10,
        fontSize: Fonts.normalize(18),
    },
    descriptionContainer: {
        marginLeft: 10,
        marginVertical: 10,
    },
    description: {
        fontSize: Fonts.normalize(16),
    },
});

export default AddWorkoutScreen;
