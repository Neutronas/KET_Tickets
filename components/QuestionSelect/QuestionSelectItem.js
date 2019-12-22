import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default QuestionSelectItem = ({ questionIndex, isActive, isVisited, onPress }) => {
    console.log(isVisited ? [styles.visitedContainer] : '', isActive ? [styles.container, styles.activeContainer] : styles.container);
    return (
         <View style={isActive ? [styles.container, styles.activeContainer] : isVisited ? [styles.visitedContainer, styles.container] : styles.container} >
            <Text
                style={isActive ? [styles.item, styles.activeItem] : styles.item}
                onPress={onPress}
            >
                {questionIndex + 1}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: '#EDEDED',
    },
    visitedContainer: {
        backgroundColor: '#eeeeee',
    },
    activeContainer: {
        backgroundColor: '#003300',
        color: '#ffffff'
    },
    item: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //borderRightWidth: StyleSheet.hairlineWidth,
        // borderRightColor: '#EDEDED',
    },
    activeItem: {
        // fontWeight: 'bold',
        color: '#ffffff'
    }
});