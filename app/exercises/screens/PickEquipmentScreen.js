import React from 'react';
import ItemSelector from "../../common/components/selector/ItemSelector";
import { changeEquipment } from "../actions";
import { connect } from "react-redux";


const PickEquipmentScreen = ({ navigation, changeEquipment, currentExercise, equipments }) => {
    // TODO: Use selector for extracting items
    const items = equipments.allIds.map(id => {
        const equipment = equipments.byId[id];
        return {
            key: equipment.id,
            label: equipment.title,
            selected: currentExercise.equipmentId === equipment.id,
            value: equipment
        };
    });

    return (
        <ItemSelector
            items={items}
            onItemSelected={(itemValue) => {
                changeEquipment(itemValue);
                navigation.goBack();
            }}
        />
    );
};

const mapStateToProps = state => ({
    currentExercise: state.exercises.currentExercise,
    equipments: state.equipments,
});

const mapDispatchToProps = (dispatch) => ({
    changeEquipment: (equipment) => dispatch(changeEquipment(equipment.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickEquipmentScreen)
