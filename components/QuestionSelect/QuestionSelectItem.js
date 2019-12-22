import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default QuestionSelectItem = ({ questionIndex, isActive, onPress }) => {
    return (
        <Text
            style={isActive ? [styles.item, styles.activeItem] : styles.item}
            onPress={onPress}
        >
            {questionIndex + 1}
        </Text>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: '#EDEDED',
    },
    activeItem: {
        fontWeight: 'bold',
    }
});