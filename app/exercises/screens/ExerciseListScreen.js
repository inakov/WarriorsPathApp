import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import {connect} from "react-redux";
import ListItem from "../../common/components/list/ListItem";
import TextButton from "../../common/components/input/TextButton";

const ExerciseListScreen = props => {
    const allExercises = props.exercises.allIds.map(id => props.exercises.byId[id]);
    return (
        <FlatList
            style={[
                styles.content,
            ]}
            data={allExercises}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
                <ListItem
                    content={{
                        title: item.name,
                        icon: {
                            name: 'dots-horizontal',
                        }
                    }}
                />
            }
        />
    );
};

ExerciseListScreen.navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        headerRight: (
            <TextButton
                title="New"
                color={navigationOptions.headerTintColor}
                onPress={() => navigation.navigate('AddExerciseScreen')}
            />
        ),
    };
};

const styles = StyleSheet.create({
    content: {
      flex: 1,
    }
});

const mapStateToProps = state => ({
    exercises: state.exercises
});

export default connect(mapStateToProps)(ExerciseListScreen);
