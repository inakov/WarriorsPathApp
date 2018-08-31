import React, { PureComponent } from 'react';
import {
    View,
    Animated,
    StyleSheet,
} from 'react-native';
import Colors from "../../Colors";
import {Item} from "./EditableListItem";
import EditableListItem from "./EditableListItem";
import TextButton from "../input/TextButton";
import type { NativeMethodsMixinType } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';

type Props = {
    item: Item,
    itemHeight: number,
    removeButtonWidth: number,
    onRemoveButtonOpen: (item: Item) => void,
    onRemove: (item: Item) => void,
    onRender: (item: Item, screenY: number, height: number) => void,
    onReorderStart: (item: Item) => void,
    onReorderEnd: (item: Item) => void,
}

type State = {
    slideAnimation: any,
}

export default class RemovableItem extends PureComponent {

    props: Props;
    state: State  = {
        slideAnimation: new Animated.Value(0),
    };

    container: ?NativeMethodsMixinType;

    componentWillReceiveProps(nextProps: Props) {
        const isRemoveButtonOpened = nextProps.item.isRemoveButtonOpened;
        if(isRemoveButtonOpened !== this.props.item.isRemoveButtonOpened){
            isRemoveButtonOpened ? this.showRemoveButton() : this.hideRemoveButton()
        }
    };

    getRemoveButtonStyle = (): {} => {
        return {
            width: this.props.removeButtonWidth,
            marginRight: -this.props.removeButtonWidth,
        }
    };

    getSlideTransformation = (): {} => {
        const { slideAnimation } = this.state;
        return {
            transform: [{
                translateX: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -this.props.removeButtonWidth]
                }),
            }]
        }
    };

    showRemoveButton = (): void => {
        Animated.timing(
            this.state.slideAnimation,
            {
                toValue: 1,
                duration: 300,
            }
        ).start();
    };

    hideRemoveButton = (): void => {
        Animated.timing(
            this.state.slideAnimation,
            {
                toValue: 0,
                duration: 300,
            }
        ).start();
    };

    onRemoveButtonOpen = (): void => {
        this.props.onRemoveButtonOpen(this.props.item);
    };

    onRemove = (): void => {
        this.props.onRemove(this.props.item);
    };

    handleOnLayout = ({nativeEvent: {layout}}) => {
        this.container && this.container.measure(this.onMeasure);
    };

    onMeasure = (x: number,
                 y: number,
                 width: number,
                 height: number,
                 screenX: number,
                 screenY: number): void => {
        this.props.onRender(this.props.item, screenY, height)
    };

    render() {
        return (
            <Animated.View
                style={[
                    this.getSlideTransformation(),
                ]}
            >
                <View
                    style={[styles.container]}
                    ref={el => this.container = el}
                    onLayout={this.handleOnLayout}
                >
                    <EditableListItem
                        item={this.props.item}
                        itemHeight={this.props.itemHeight}
                        removeIconWidth={this.props.removeButtonWidth}
                        removeIconOnPress={this.onRemoveButtonOpen}
                        onRender={this.props.onRender}
                        onReorderStart={this.props.onReorderStart}
                        onReorderEnd={this.props.onReorderEnd}
                    />
                    <View style={this.getRemoveButtonStyle()}>
                        <RemoveButton
                            title={"Remove"}
                            onRemove={this.onRemove}
                        />
                    </View>
                </View>
            </Animated.View>
        );

    }

}

RemovableItem.defaultProps = {
    removeButtonWidth: 80,
    itemHeight: 70,
};

const RemoveButton = (props) => {
    const {
        title,
        containerStyle,
        onRemove,
    } = props;

    return (
        <View style={[styles.removeButtonContainer, containerStyle && containerStyle]}>
            <TextButton containerStyle={styles.removeButton} onPress={onRemove} title={title}/>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.red,
    },
    removeButton: {
        flex: 1
    }
});
