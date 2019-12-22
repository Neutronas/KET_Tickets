import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default Navigation = ({ onPress }) => {
    return (
        <View style={styles.navigationContainer}>
            <AntDesign name='arrowleft' size={26} color="#2e78b7" onPress={onPress(-1)} />
            <AntDesign name='arrowright' size={26} color="#2e78b7" onPress={onPress(1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    navigationContainer: {
        marginRight: 30,
        marginLeft: 30,
        paddingVertical: 15,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
