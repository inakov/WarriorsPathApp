import React from "react";
import {
    StyleSheet,
} from "react-native";
import TextButton from "../../common/components/input/TextButton"
import PickMuscleGroupScreen from "./PickMuscleGroupScreen";
import PickEquipmentScreen from "./PickEquipmentScreen";
import PickExercisesTypeScreen from "./PickExercisesTypeScreen";
import EditExerciseView from "./EditExerciseView";
import { add, clearCurrent } from "../actions"

const AddExerciseScreen = ({ navigation }) => {
    return (
        <EditExerciseView
            onMuscleGroupPick={() => navigation.navigate("PickMuscleGroupScreen")}
            onEquipmentPick={() => navigation.navigate("PickEquipmentScreen")}
            onExerciseTypePick={() => navigation.navigate("PickExercisesTypeScreen")}
        />
    );
};

AddExerciseScreen.navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        headerLeft: (
            <TextButton
                title="Cancel"
                titleStyle={styles.cancelButton}
                color={navigationOptions.headerTintColor}
                onPress={() => {
                    navigation.dispatch(clearCurrent());
                    navigation.goBack();
                }}
            />
        ),
        headerRight: (
            <TextButton
                title="Add"
                color={navigationOptions.headerTintColor}
                onPress={() => {
                    navigation.dispatch(add());
                    navigation.goBack();
                }}
            />
        ),
    };
};

const styles = StyleSheet.create({
    cancelButton: {
        paddingLeft: 10
    },
});

export default AddExerciseScreen;
