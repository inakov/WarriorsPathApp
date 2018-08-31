import PropTypes from 'prop-types';
import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from '../icons/Icon';
import Colors from '../../Colors';
import Fonts from '../../Fonts';
import Text from '../text/Text';
import TouchableItem from '../touchable/TouchableItem';

const ListItem = props => {
    const {
        onPress,
        onLongPress,
        containerStyle,
        itemWrapperStyle,
        addSeparator,
        leftIcon,
        content,
        children,
        ...attributes
    } = props;

    let Component = onPress || onLongPress ? TouchableHighlight : View;

    return (
        <Component
            {...attributes}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View
                style={[
                    styles.container,
                    styles.rowContainer,
                    containerStyle && containerStyle,
                ]}
            >
                {leftIcon && leftIcon.name && <IconComponent { ...leftIcon}/>}
                <View
                    style={[
                        styles.itemWrapper,
                        itemWrapperStyle && itemWrapperStyle,
                        addSeparator && styles.separator
                    ]}
                >
                    {content ? <ItemContent {...content} /> : children}
                </View>
            </View>
        </Component>
    );
};

const IconComponent = props => {
    const {
        type,
        name,
        color,
        size,
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        feedback,
        ...attributes
    } = props;
    const Component = onPress || onLongPress || onPressIn ? TouchableItem : View;
    const activeOpacity = feedback ? 0.2 : 1.0;
    return (
        <Component
            activeOpacity={activeOpacity}
            onPress={onPress}
            onLongPress={onLongPress}
            onPressOut={onPressOut}
            onPressIn={onPressIn}
            style={[
                styles.iconStyle,
            ]}
        >
            <View
                style={[styles.iconWrapper]}
            >
                <Icon
                    type={type}
                    name={name}
                    color={color}
                    size={size}
                    {...attributes}
                />
            </View>
        </Component>
    );
};

const ItemContent = props => {
    const {
        title,
        titleStyle,
        titleContainerStyle,
        rightTitle,
        rightTitleStyle,
        rightTitleContainerStyle,
        icon,
        hideIcon,
    } = props;

    return (
      <View style={[styles.rowContainer, styles.itemContainer]}>
          <View
              style={[
                  styles.itemTitleContainer,
                  titleContainerStyle && titleContainerStyle
              ]}
          >
              <Text
                  numberOfLines={1}
                  style={[
                      styles.itemTitle,
                      titleStyle && titleStyle
                  ]}
              >
                  {title}
              </Text>
          </View>
          <View style={[styles.rowContainer]}>
              <View
                  style={[
                      styles.rightTitleContainer,
                      rightTitleContainerStyle && rightTitleContainerStyle,
                  ]}
              >
                  <Text
                      numberOfLines={1}
                      style={[
                          styles.rightTitle,
                          rightTitleStyle && rightTitleStyle
                      ]}
                  >
                      {rightTitle}
                  </Text>
              </View>
              { !hideIcon && icon && <IconComponent {...icon} /> }
          </View>
      </View>
    );

};

IconComponent.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.any,
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.any,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    feedback: PropTypes.bool,
};

ItemContent.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.any,
    titleContainerStyle: PropTypes.any,
    rightTitle: PropTypes.string,
    rightTitleStyle: PropTypes.any,
    rightTitleContainerStyle: PropTypes.any,
    icon: PropTypes.any,
    hideIcon: PropTypes.bool
};

ListItem.propTypes = {
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    containerStyle: PropTypes.any,
    itemWrapperStyle: PropTypes.any,
    addSeparator: PropTypes.bool,
    leftIcon: PropTypes.any,
    content: PropTypes.any,
    children: PropTypes.any,
};

ItemContent.defaultProps = {
    icon: {
        type: 'font-awesome',
        name: 'chevron-right',
    },
    hideIcon: false,
};

IconComponent.defaultProps = {
    size: 18,
    color: Colors.magnesium,
    feedback: false,
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
    },
    rowContainer: {
        flexDirection: 'row'
    },
    itemWrapper: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
    },
    separator: {
        borderBottomColor: Colors.matterhorn,
        borderBottomWidth: 0.5,
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper: {
        marginRight: 10
    },
    itemTitle: {
        fontSize: Fonts.normalize(18),
        color: Colors.primaryText,
        marginRight: 10
    },
    rightTitle: {
        fontSize: Fonts.normalize(18),
        color: Colors.lightText,
        marginRight: 10
    },
    itemContainer: {
        justifyContent: 'center',
    },
    itemTitleContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    rightTitleContainer: {
        justifyContent: 'center',
        maxWidth: 160,
    }
});

export default ListItem;
