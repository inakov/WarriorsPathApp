import React from 'react';
import {connect} from "react-redux";
import ItemSelector from "../../common/components/selector/ItemSelector";
import { changeMuscleGroup } from "../actions";

const PickMuscleGroupScreen = ({ navigation, dispatch, currentExercise, muscleGroups }) => {
    const items = muscleGroups.allIds.map(id => {
        const group = muscleGroups.byId[id];
        return {
            key: group.id,
            label: group.title,
            selected: currentExercise.muscleGroupId === group.id,
            value: group
        }
    });

    return (
        <ItemSelector
            items={items}
            onItemSelected={(itemValue) => {
                dispatch(changeMuscleGroup(itemValue.id));
                navigation.goBack();
            }}
        />
    );
};

const mapStateToProps = state => ({
    currentExercise: state.exercises.currentExercise,
    muscleGroups: state.muscles,
});

export default connect(mapStateToProps)(PickMuscleGroupScreen)
