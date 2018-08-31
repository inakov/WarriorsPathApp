import PropTypes from 'prop-types';
import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import Icon from '../../icons/Icon';
import Colors from '../../../Colors';
import Fonts from '../../../Fonts';
import Text from "../../text/Text";

const ListItem = props => {
    const {
        onPress,
        onLongPress,
        containerStyle,
        withSeparator,
        title,
        titleStyle,
        subtitle,
        subtitleStyle,
        rightTitle,
        rightTitleStyle,
        rightIcon,
        leftIcon,
        children,
        ...attributes
    } = props;

    let Component = onPress || onLongPress ? TouchableHighlight : View;

    return (
        <Component
            onPress={onPress}
            onLongPress={onLongPress}
            {...attributes}
        >
            <View
                style={[
                    styles.container,
                    containerStyle && containerStyle
                ]}
            >
                {leftIcon && <Icon containerStyle={styles.leftIcon} {...leftIcon} />}
                <View
                    style={[
                        styles.content,
                        withSeparator && styles.withSeparator
                    ]}
                >
                    <View style={styles.titleSubtitleContainer}>
                        <View style={styles.titleContainer}>
                            <Text
                                style={[
                                    styles.title,
                                    titleStyle && titleStyle
                                ]}
                                numberOfLines={1}
                            >
                                {title}
                            </Text>
                        </View>
                        {subtitle && (
                        <View style={styles.subtitleContainer}>
                            <Text
                                style={[
                                styles.subtitle,
                                subtitleStyle && subtitleStyle
                                ]}
                                numberOfLines={1}
                            >
                                {subtitle}
                            </Text>
                        </View>)}
                    </View>
                    <View style={styles.rightTitleContainer}>
                        <Text
                            style={[
                                styles.rightTitle,
                                rightTitleStyle && rightTitleStyle
                            ]}
                            numberOfLines={1}
                        >
                            {rightTitle}
                        </Text>
                    </View>
                    {rightIcon && <Icon {...rightIcon} containerStyle={styles.rightIcon} />}
                </View>
            </View>
        </Component>
    );
}

ListItem.propTypes = {
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    containerStyle: PropTypes.any,
    withSeparator: PropTypes.bool,
    title: PropTypes.string,
    titleStyle: PropTypes.any,
    subtitle: PropTypes.string,
    subtitleStyle: PropTypes.any,
    rightTitle: PropTypes.string,
    rightTitleStyle: PropTypes.any,
    rightIcon: PropTypes.any,
    leftIcon: PropTypes.any,
    children: PropTypes.any,
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 15,
        flexDirection: 'row',
    },
    withSeparator: {
        borderBottomColor: Colors.matterhorn,
        borderBottomWidth: 0.5,
    },
    titleSubtitleContainer: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    subtitleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: Fonts.normalize(18),
        color: Colors.primaryText,
    },
    subtitle: {
        fontSize: Fonts.normalize(14),
        color: Colors.lightText,
    },
    rightTitle: {
        color: Colors.lightText,
        fontSize: Fonts.normalize(18),
    },
    rightTitleContainer: {
        justifyContent: 'center',
        maxWidth: 160,
        marginRight: 10,
    },
    leftIcon: {
        paddingRight: 10,
    },
    rightIcon: {
        marginRight: 10,
    },
});

export default ListItem;
