// @flow

import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Colors from "../../Colors";
import ListItem from "./ListItem";
import RemoveIcon from "./RemoveIcon";

export type Item = {
    key: string,
    title: string,
    subtitle: string,
    data: any,
    // width: number,
    topY: number,
    middleY: number,
    bottomY: number,
    isBeingDragged?: boolean,
    isRemoveButtonOpened?: boolean
};

type Props = {
    item: Item,
    itemHeight: number,
    removeIconWidth: number,
    removeIconOnPress: () => void,
    onReorderStart: (item: Item) => void,
    onRender: (item: Item, screenY: number, height: number) => void,
}

const EditableListItem = (props: Props) => {

    const { itemHeight, removeIconWidth, removeIconOnPress, item:{ title, isBeingDragged }} = props;
    return (
        <View
            style={[
                styles.container,
                isBeingDragged && styles.hiddenContainer,]}
        >
            <View style={[styles.removeIconContainer, {width: removeIconWidth}]}>
                <RemoveIcon onPress={removeIconOnPress}/>
            </View>
            <View style={styles.content}>
                <ListItem
                    itemWrapperStyle={{height: itemHeight, justifyContent: 'center',}}
                    content={{
                        title: title,
                        icon: {
                            name: 'reorder-horizontal',
                            onPressOut: () => props.onReorderEnd(props.item),
                            onPressIn: () => props.onReorderStart(props.item),
                        }
                    }}
                />
            </View>
        </View>
    );
};

export default EditableListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkBackground,
    },
    hiddenContainer: {
        opacity: 0,
    },
    content: {
        flex: 1,
    },
    removeIconContainer: {
        overflow: 'hidden',
        alignItems: 'flex-end',
    },
});
