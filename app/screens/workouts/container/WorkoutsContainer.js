'use strict';

import React from 'react';
import {connect} from 'react-redux';
import EditableList from '../../../common/components/list/EditableList';
import TextButton from "../../../common/components/input/TextButton";

class WorkoutsContainer extends React.Component {
    render() {
        return (
            <EditableList itemHeight={70} dataById={this.props.exercises.byId} order={this.props.exercises.allIds} />
        );
    }
}

WorkoutsContainer.navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        headerRight: (
            <TextButton
                title="New"
                color={navigationOptions.headerTintColor}
                onPress={() => navigation.navigate('AddWorkoutScreen')}
            />
        ),
    };
};



const mapStateToProps = state => ({
    exercises: state.exercises,
});

export default connect(mapStateToProps)(WorkoutsContainer)
