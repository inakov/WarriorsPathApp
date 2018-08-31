import React from 'react';
import {
    ScrollView,
    StyleSheet,
} from 'react-native';
import List from "../../common/components/list/List"
import FormItem from "../../common/components/list/ListItem"
import ListItem from "../../common/components/list/items/ListItem"
import TextInput from "../../common/components/input/TextInput"
import { changeName } from "../actions"
import { connect } from "react-redux";

const EditExerciseView = (props) => {
    const {
        updateExerciseName,
        currentExercise,
        exerciseTypes,
        muscles,
        equipments,
        onMuscleGroupPick,
        onEquipmentPick,
        onExerciseTypePick,
    } = props;

    return (
        <ScrollView
            style={styles.container}
            keyboardDismissMode={'on-drag'}
        >
            <List addSeparator={true} >
                <FormItem>
                    <TextInput
                        returnKeyType={'done'}
                        placeholder={"Name"}
                        onChangeText={updateExerciseName}
                        value={currentExercise.name}
                    />
                </FormItem>
                <FormItem>
                    <TextInput
                        style={styles.tips}
                        multiline={true}
                        placeholder={"#Tips"}
                    />
                </FormItem>
            </List>

            <ListItem
                onPress={onMuscleGroupPick}
                title={"Muscle Group"}
                rightTitle={muscles.byId[currentExercise.muscleGroupId].title}
                rightIcon={{name:'chevron-right', type:'octicon'}}
            />
            <ListItem
                onPress={onEquipmentPick}
                title={"Equipment"}
                rightTitle={equipments.byId[currentExercise.equipmentId].title}
                rightIcon={{name:'chevron-right', type:'octicon'}}
            />
            <ListItem
                onPress={onExerciseTypePick}
                title={"Type"}
                rightTitle={exerciseTypes.byId[currentExercise.typeId].title}
                rightIcon={{name:'chevron-right', type:'octicon'}}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    tips: {
        height: 80,
    },
});

const mapStateToProps = (state) => ({
    currentExercise: state.exercises.currentExercise,
    muscles: state.muscles,
    equipments: state.equipments,
    exerciseTypes: state.exercises.types,
});

const mapDispatchToProps = (dispatch) => ({
    updateExerciseName: (name) => dispatch(changeName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExerciseView);
