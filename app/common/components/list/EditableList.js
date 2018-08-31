// @flow

import React, { PureComponent } from 'react';
import {
    View,
    Animated,
    FlatList,
    StyleSheet,
    PanResponder,
    LayoutAnimation,
} from 'react-native';
import type { Item } from "./EditableListItem";
import FloatingListItem from "./FloatingListItem";
import EditableListItem from "./EditableListItem";
import type { NativeMethodsMixinType } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';
import RemovableItem from "./RemovableItem";
import { moveArrayElement } from "../../helpers";


type Props = {
    dataById: {},
    order: string[],
    itemHeight: number,
    animationDuration: number,
};

type State = {
    items: Item[],
    layout: { height: number, width: number, screenY: number },
    openedRemoveButton?: Item,
    draggedItem?: Item,
    dndEnabled: boolean,
    scrollEnabled: boolean,
}

export default class EditableList extends PureComponent {

    props: Props;
    fingerPosition = new Animated.ValueXY({ x: 0, y: 0});
    panResponder: PanResponder;
    isPanActive: boolean = false;
    container: ?NativeMethodsMixinType;
    list: ?any;
    _autoScrollInterval: IntervalID;
    contentOffset = { x: 0, y: 0 };
    expectedOffset = 0;

    static defaultProps = {
        animationDuration: 300,
    };

    state: State = {
        items: EditableList.mapDataToItems(this.props.order, this.props.dataById),
        layout: { height: 0, width: 0, screenY: 0 },
        dndEnabled: true,
        scrollEnabled: true,
    };

    componentWillMount() {
        this.panResponder = this.createPanResponder();
    }

    componentWillUpdate() {
        LayoutAnimation.configureNext({
            ...LayoutAnimation.Presets.easeInEaseOut,
            duration: this.props.animationDuration,
        });
    }

    createPanResponder = (): PanResponder => PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState: GestureState) => this.onMoveShouldSetPanResponder(gestureState),
        onPanResponderGrant: (_, gestureState: GestureState) => this.onPanResponderGrant(),
        onPanResponderMove: (ev, gestureState: GestureState) => this.onPanResponderMove(ev, gestureState),
        onPanResponderRelease: (_, gestureState: GestureState) => this.onPanResponderEnd(),
        onPanResponderTerminate: (_, gestureState: GestureState) => this.onPanResponderEnd(),
        onPanResponderEnd: (e, gestureState) => console.log('onPanResponderEnd'),
        onPanResponderReject: (e, gestureState) => console.log('onPanResponderRejected'),
        onPanResponderTerminationRequest: (e, gestureState) => console.log('onPanResponderTerminationRequest'),
    });

    onMoveShouldSetPanResponder = (gestureState: GestureState): boolean => {
        console.log('onMoveShouldSetPanResponder');
        const { dx, dy, moveX, moveY, numberActiveTouches } = gestureState;

        if (this.state.draggedItem) {
            return true;
        }

        return false;
    };

    onPanResponderGrant = (): void => {
        console.log('onPanResponderGrant');
        this.isPanActive = true;
        this.updateItem(this.state.draggedItem, { isBeingDragged: true,});

    };

    // Handle drag gesture
    onPanResponderMove = (ev, gestureState: GestureState): void => {
        console.log('onPanResponderMove');
        if(!this.state.draggedItem) return;

        const { moveX, moveY } = gestureState;
        const adjustedMoveY = Math.max((moveY - this.state.layout.screenY) + this.contentOffset.y, 0);
        if (!this.state.dndEnabled) {
            return;
        }
        const draggedOverItem = this.findItemAtCoordinates(moveX, adjustedMoveY, this.state.draggedItem);
        if (draggedOverItem) {
            this.swapItems(this.state.draggedItem, draggedOverItem);
        }

        const fingerPositionTransformer = Animated.event([
            null,
            {
                dx: this.fingerPosition.x, // x,y are Animated.Value
                dy: this.fingerPosition.y,
            },
        ]);

        fingerPositionTransformer(ev, gestureState);

        // if(moveY < 50){
        //     this._startAutoScroll({ direction: 1, shouldScroll: ()=>true, getScrollStep: (inc)=>50+inc })
        // }
    };

    onPanResponderEnd = (): void => {
        console.log('onPanResponderEnd');
        this.isPanActive = false;
        this.fingerPosition.setValue({x:0, y:0});
        this.onReorderItemEnd(this.state.draggedItem)
    };

    findItemAtCoordinates = (x: number, y: number, exclude?: Item): ?Item => {
        const itemIndex = Math.floor( y / this.props.itemHeight );
        const itemUnderFinger = this.state.items[itemIndex];
        return itemUnderFinger && itemUnderFinger.key !== exclude.key ? itemUnderFinger : undefined
    };

    swapItems = (draggedOverItem: Item, anotherItem: Item): void => {
        this.setState((state: State) => {
            const draggedItemIndex = state.items.findIndex(({ key }) => key === draggedOverItem.key);
            const anotherItemIndex = state.items.findIndex(({ key }) => key === anotherItem.key);
            return {
                items: moveArrayElement(
                    state.items,
                    draggedItemIndex,
                    anotherItemIndex,
                ),
            }
        });
    };


    enableDndAfterAnimating = (): void => {
        setTimeout(this.enableDnd, this.props.animationDuration)
    };

    enableDnd = (): void => {
        this.setState({ dndEnabled: true });
    };

    handleOnLayout = ({ nativeEvent:{ layout }}) => {
        this.container && this.container.measure(this.onMeasure);
    };

    onMeasure = (x: number,
                 y: number,
                 width: number,
                 height: number,
                 screenX: number,
                 screenY: number): void => {
        const layout = {
            screenY,
            height,
            width,
        };
        this.setState({layout});
    };

    onRenderItem = (item: Item,
                    screenY: number,
                    height: number): void => {
        this.updateItem(item, {
            topY: screenY,
            middleY: screenY + height / 2,
            bottomY: screenY + height,
        });
    };

    onReorderItemStart = (item: Item): void => {
        console.log('onReorderStart');
        this.setState({draggedItem: item, scrollEnabled: false});
    };

    onReorderItemEnd = (item: Item): void => {
        console.log('onReorderEnd(', item, ')');
        if(this.isPanActive) return;

        this.setState({draggedItem: undefined, scrollEnabled: true});
        if(item) {
            this.updateItem(item, {
                isBeingDragged: false,
            });
        }
    };

    onRemoveButtonOpen = (item: Item): void => {
        if(this.state.openedRemoveButton){
            this.updateItem(this.state.openedRemoveButton, {
                isRemoveButtonOpened: false,
            });
        }
        this.setState({openedRemoveButton: item});
        this.updateItem(item, {
            isRemoveButtonOpened: true,
        });
    };

    static mapDataToItems = (order: string[], dataById: {}) => {
        const items = order.map(id => {
            const data = dataById[id];
            return {
                key: data.id,
                title: data.name,
                data: data,
            };
        });

        return [
            ...items,
            ...items.map(item => ({...item, key: item.key+`a`})),
            ...items.map(item => ({...item, key: item.key+`b`})),
            ...items.map(item => ({...item, key: item.key+`c`})),
            ...items.map(item => ({...item, key: item.key+`d`})),
            ...items.map(item => ({...item, key: item.key+`e`})),
            ...items.map(item => ({...item, key: item.key+`f`})),
            ...items.map(item => ({...item, key: item.key+`g`})),
        ]
    };

    updateItem = (item: Item, updatedFields: {}): void => {
        this.setState((state: State) => {
            const index = state.items.findIndex(({ key }) => key === item.key);
            return {
                items: [
                    ...state.items.slice(0, index),
                    {
                        ...state.items[index],
                        ...updatedFields,
                    },
                    ...state.items.slice(index + 1),
                ],
            }
        });
    };

    removeItem = (item: Item): void => {
        this.setState({openedRemoveButton: undefined});
        this.setState((state: State) => {
            const index = state.items.findIndex(({ key }) => key === item.key);
            return {
                items: [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ]

            }
        });
    };

    handleScroll = e => {
        this.contentOffset = e.nativeEvent.contentOffset;
    };

    scrollBy({dx = 0, dy = 0, animated = true}) {
        this.scrollToOffset({ offset: dy + this.contentOffset.y, animated: animated });
    }

    scrollToOffset({offset = 0, animated = true}) {
        if(this.list){
            this.list.scrollToOffset({offset, animated});
        }
    }

    scrollAnimation = () => {
        if (this.state.draggedItem) {
            // if (this.moveY === undefined) {
            //     return requestAnimationFrame(this.scrollAnimation)
            // }

            const SCROLL_OFFSET = this.state.layout.screenY;
            const moveY = 10;
            const SCROLL_LOWER_BOUND = 80;
            const SCROLL_HIGHER_BOUND = this.state.layout.height - SCROLL_LOWER_BOUND;
            const NORMAL_SCROLL_MAX =
                this.state.layout.height;
            const MAX_SCROLL_VALUE = this.state.items.length * this.props.itemHeight;

            const currentScrollValue = this.contentOffset.y;
            let newScrollValue = null;
            const SCROLL_MAX_CHANGE = 20;

            if (moveY < SCROLL_LOWER_BOUND && currentScrollValue > 0) {
                const PERCENTAGE_CHANGE = 1 - moveY / SCROLL_LOWER_BOUND;
                newScrollValue =
                    currentScrollValue - PERCENTAGE_CHANGE * SCROLL_MAX_CHANGE;
                if (newScrollValue < 0) newScrollValue = 0
            }
            if (
                moveY > SCROLL_HIGHER_BOUND &&
                currentScrollValue < MAX_SCROLL_VALUE
            ) {
                const PERCENTAGE_CHANGE =
                    1 - (this.state.layout.height - moveY) / SCROLL_LOWER_BOUND;
                newScrollValue =
                    currentScrollValue + PERCENTAGE_CHANGE * SCROLL_MAX_CHANGE;
                if (newScrollValue > MAX_SCROLL_VALUE) newScrollValue = MAX_SCROLL_VALUE
            }
            // if (newScrollValue !== null) {
            //     console.log('new offset:', 5);
            //     this.contentOffset.y = newScrollValue;
            //     this.scrollToOffset({ offset: this.contentOffset.y, animated: true })
            // }
            this.expectedOffset = this.contentOffset.y + 10;
            this.scrollToOffset({ offset: this.expectedOffset, animated: true });
        }
    };

    _startAutoScroll({direction, shouldScroll, getScrollStep}) {
        if (!shouldScroll()) {
            return;
        }

        let counter = 0;

        this._autoScrollInterval = setInterval(() => {
            if (shouldScroll()) {
                const movement = {
                    ['dy']: direction * getScrollStep(counter++),
                };

                this.scrollBy(movement);
            } else {
                this._stopAutoScroll();
            }
        }, 50);
    }

    _stopAutoScroll() {
        clearInterval(this._autoScrollInterval);
        this._autoScrollInterval = null;
    }

    render() {
        return (
            <View
                style={styles.container}
                ref={el => this.container = el}
                {...this.panResponder.panHandlers}
            >
                <FlatList
                    scrollEnabled={this.state.scrollEnabled}
                    ref={el => this.list = el}
                    onLayout={this.handleOnLayout}
                    onScroll={this.handleScroll}
                    style={[
                        styles.container,
                    ]}
                    data={this.state.items}
                    renderItem={({item}) =>
                        <RemovableItem
                            parentLayout={this.state.layout}
                            item={item}
                            itemHeight={this.props.itemHeight}
                            onRemoveButtonOpen={this.onRemoveButtonOpen}
                            onRemove={this.removeItem}
                            onRender={this.onRenderItem}
                            onReorderStart={this.onReorderItemStart}
                            onReorderEnd={this.onReorderItemEnd}
                        />
                    }
                />
                {this.state.draggedItem && this.renderFloatingItem()}
            </View>
        );
    }

    renderFloatingItem() {
        const topY = this.state.items.findIndex(({ key }) => key === this.state.draggedItem.key) * this.props.itemHeight;
        const marginTop = topY - this.contentOffset.y;
        return (
            <FloatingListItem item={this.state.draggedItem} marginTop={marginTop} pan={this.fingerPosition} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingItem: {
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
    },
});
