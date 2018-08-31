import React from 'react';
import ItemSelector from "../../common/components/selector/ItemSelector";
import { changeType } from "../actions";
import {connect} from "react-redux";

const PickExercisesTypeScreen = ({ navigation, dispatch, currentExercise, exerciseTypes }) => {
    const items = exerciseTypes.allIds.map(id => {
        const type = exerciseTypes.byId[id];
        return {
            key: type.id,
            label: type.title,
            selected: currentExercise.typeId === type.id,
            value: type
        };
    });

    return (
        <ItemSelector
            items={items}
            onItemSelected={(itemValue) => {
                dispatch(changeType(itemValue.id));
                navigation.goBack();
            }}
        />
    );
};

const mapStateToProps = state => ({
    currentExercise: state.exercises.currentExercise,
    exerciseTypes: state.exerciseTypes,
});

export default connect(mapStateToProps)(PickExercisesTypeScreen)
