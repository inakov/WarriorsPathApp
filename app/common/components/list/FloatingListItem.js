import React, { PureComponent } from 'react';
import {
    Animated,
    StyleSheet,
} from 'react-native';
import { Item } from "./EditableListItem";
import EditableListItem from './EditableListItem'

type Props = {
    item: Item,
    marginTop: number,
    pan: Animated.ValueXY,
}

export default class FloatingListItem extends PureComponent {

    props: Props;

    shouldComponentUpdate(props) {
        if (props.item.data !== this.props.item.data) return true
        return false
    }

    render() {
        const { item } = this.props;
        return (
            <Animated.View
                style={[
                    styles.floatingItem,
                    {marginTop: this.props.marginTop},
                    {transform: [{translateY: this.props.pan.y}]},
                ]}
            >
                <EditableListItem
                    itemHeight={70}
                    removeIconWidth={80}
                    onRemove={()=>{}}
                    onRender={()=>{}}
                    onReorderStart={()=>{}}
                    onReorderEnd={()=>{}}
                    item={item}
                />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    floatingItem: {
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
    },
});

